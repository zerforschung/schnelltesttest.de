import React from 'react';

export function ResultIcon({ passed }: { passed: boolean }): JSX.Element {
  // TODO: Nicer icon
  return (
    <>
      <div style={{  height: '25vw',
        width: '25vw',
        backgroundColor: passed ? 'green' : 'red',
        borderRadius: '50%',
        display: 'inline-block'}}></div>
    </>
  );
}
