import React from 'react';
import failedIcon from './failed.png';
import passedIcon from './passed.png';

export function ResultIcon({ passed }: { passed: boolean }): JSX.Element {
  // TODO: Icons as SVG
  return (
    <>
      <img src={passed ? passedIcon : failedIcon} />
    </>
  );
}
