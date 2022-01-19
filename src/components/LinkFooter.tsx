import generatedGitInfo from '../generatedGitInfo.json';
import React from 'react';

export function LinkFooter(): JSX.Element {
  return (
    <div style={{ textAlign: 'center' }}>
      <a href={'https://zerforschung.org/unterstuetzen/'}>Unterstützen</a> |{' '}
      <a href={'https://zerforschung.org/impressum/'}>Impressum</a>
      <br />
      <span style={{ fontSize: '0.75em', color: '#666' }}>
        Version: {generatedGitInfo.gitCommitHash}
      </span>
    </div>
  );
}
