import React from 'react';
import LogoHeader from './LogoHeader';

export default function LogoHeadingPage({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LogoHeader />
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 2em 2em 2em',
          maxWidth: '800px',
          height: '80%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
