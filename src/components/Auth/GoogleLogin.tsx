"use client"
import { BsGoogle } from 'react-icons/bs';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

const GoogleLogin = () => {
  const handleClick = () => {
    signIn('google', { callbackUrl: '/home' });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={handleClick}
        variant="outline"
        className="w-[20%]"
      >
        <BsGoogle />
        Google Sign In
      </Button>
    </div>
  );
};

export default GoogleLogin;
