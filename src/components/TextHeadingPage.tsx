import React from 'react';
import { TextHeader } from './TextHeader';
import { BigBackButton } from './Buttons';

export default function TextHeadingPage({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
          fontFamily: 'Open Sans'
      }}
    >
      <TextHeader text={heading} />
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 1em 2em 1em',
          maxWidth: '800px',
          height: '100%',
        }}
      >
        {children}
        <BigBackButton content={'Zurück'} />
      </div>
    </div>
  );
}
