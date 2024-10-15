import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ScreenTemplate from '../components/ScreenTemplate';

const ScreenY = () => {
  const { user } = useAuth();

  const content = user?.type === 'member1'
    ? "Welcome to Screen Y. This content is visible to member1 and member2 users. As a member1, you have full access."
    : "Welcome to Screen Y. This content is visible to member1 and member2 users. As a member2, you have standard access.";

  return (
    <ScreenTemplate
      title="Screen Y"
      content={content}
    />
  );
};

export default ScreenY;
