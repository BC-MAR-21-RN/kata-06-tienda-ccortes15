import useModalController from './useModalController';
import useShowModal from './useShowModal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const useDbController = values => {
  const {
    message,
    loading,
    errors,
    confirmed,
    setMessage,
    setLoading,
    setErrors,
    setConfirmed,
  } = useModalController();
  const {visible, showModal} = useShowModal();

  var errorMsg = '';

  const createAccount = async () => {
    if (values.userName && values.email && values.password) {
      setErrors(false);
      setConfirmed(false);
      setMessage('Creando usuario...');
      setLoading(true);
      showModal();
      await auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          firestore()
            .collection('users')
            .add({
              name: values.userName,
              email: values.email,
            })
            .then(() => {
              console.log('User added succesfully');
            })
            .catch(error => {
              console.log(error);
            });
          values.setUserName('');
          values.setPassword('');
          values.setEmail('');
          setLoading(false);
          setMessage('Usuario creado con éxito.');
          setConfirmed(true);
          showModal();
          setTimeout(() => {
            values.navigation.jumpTo('SignIn');
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          setErrors(true);
          setLoading(false);
          errorMsg = '';
          if (error.code === 'auth/email-already-in-use') {
            errorMsg =
              'Este correo ya existe, favor de intentar con otro correo válido.';
          } else if (error.code === 'auth/invalid-email') {
            errorMsg =
              'El correo es invalido, favor de intentar con un correo válido.';
          } else if (error.code === 'auth/weak-password') {
            errorMsg = 'La contraseña debe ser mayor a 6 caracteres.';
          } else {
            errorMsg = 'Ha ocurrido un error inesperado. Intentelo más tarde.';
          }
          setMessage(errorMsg);
          showModal();
        });
    } else {
      setErrors(true);
      setMessage('Favor de ingresar un usuario, correo y contraseña.');
      showModal();
    }
  };

  const signin = async () => {
    if (values.email && values.password) {
      setErrors(false);
      setConfirmed(false);
      setMessage('Iniciando sesión...');
      setLoading(true);
      showModal();
      await auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          setLoading(false);
          setConfirmed(true);
          values.setEmail('');
          values.setPassword('');
          showModal();
          setTimeout(() => {
            values.navigation.jumpTo('Home');
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          setErrors(true);
          setLoading(false);
          errorMsg = '';
          if (error.code === 'auth/wrong-password') {
            errorMsg =
              'Error en la contraseña, ingrese la contraseña de nuevo.';
          } else if (error.code === 'auth/user-not-found') {
            errorMsg =
              'El usuario no existe, ingrese de nuevo un correo válido.';
          } else if (error.code === 'auth/invalid-email') {
            errorMsg =
              'El correo es invalido, favor de intentar con un correo válido.';
          } else {
            errorMsg = 'Ha surgido un error inesperado, Intentelo más tarde.';
          }
          setMessage(errorMsg);
          showModal();
        });
    } else {
      setErrors(true);
      setMessage('Favor de ingresar correo y contraseña.');
      showModal();
    }
  };

  return {visible, message, loading, errors, confirmed, signin, createAccount};
};

export default useDbController;
