import { Button } from '@/components/ui/button';
import React from 'react';
import NextLink from 'next/link';
import { DarkModeToggle } from '@/components/DarkMode/DarkModeToggle';

const page = () => {
  return (
    <div>
      <div>Landing page</div>
      <NextLink href="/auth/login">
        <Button>Login</Button>
         <DarkModeToggle />
      </NextLink>
    </div>
  );
};

export default page;
