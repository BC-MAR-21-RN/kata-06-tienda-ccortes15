import {useState} from 'react';

const useShowModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  };

  return {visible, showModal};
};

export default useShowModal;
