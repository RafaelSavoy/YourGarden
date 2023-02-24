import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoExistentPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/store');
  }, []);
  return <></>;
};

export default NoExistentPage;
