import {useState} from 'react';

const useModalController = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  return {
    message,
    loading,
    errors,
    confirmed,
    setMessage,
    setLoading,
    setErrors,
    setConfirmed,
  };
};

export default useModalController;
