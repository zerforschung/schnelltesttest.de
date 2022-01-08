import React from 'react';

export function TextHeader({ text }: { text: string }): JSX.Element {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          height: '10%',
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: '700',
          fontFamily: 'Open Sans Condensed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          zIndex: 10,
        }}
      >
        {text}
      </div>
      {/* TODO: There has to be a nicer way */}
      <div
        style={{
          paddingTop: '10vh',
        }}
      ></div>
    </>
  );
}
