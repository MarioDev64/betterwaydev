import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ScreenTemplate from '../components/ScreenTemplate';

const ScreenX = () => {
  const { user } = useAuth();

  const content = user?.type === 'member1'
    ? "Welcome to Screen X. This content is visible to non-logged users and member1 users."
    : "Welcome to Screen X. This content is visible to all non-logged users.";

  return (
    <ScreenTemplate
      title="Screen X"
      content={content}
    />
  );
};

export default ScreenX;