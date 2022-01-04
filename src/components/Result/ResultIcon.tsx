import React from 'react';
import failedIcon from './failed.svg';
import passedIcon from './passed.svg';

export function ResultIcon({ passed }: { passed: boolean }): JSX.Element {
  // TODO: Icons as SVG
  return (
    <>
      <img src={passed ? passedIcon : failedIcon} />
    </>
  );
}
