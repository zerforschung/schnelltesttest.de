import React from 'react';
import { Translate } from './Localization';
import { LanguageSwitch } from './LanguageSwitch';
import generatedGitInfo from '../generatedGitInfo.json';

export function LinkFooter(): JSX.Element {
  return (
    <div style={{ textAlign: 'center' }}>
      <a href="https://zerforschung.org/unterstuetzen/">
        <Translate id="app.support" />
      </a>
      {' | '}
      <a href="https://zerforschung.org/impressum/">
        <Translate id="app.imprint" />
      </a>
      {' | '}
      <LanguageSwitch />
      <br />
      <span style={{ fontSize: '0.75em', color: '#666' }}>
        <Translate id="app.version" />: {generatedGitInfo.gitCommitHash}
      </span>
    </div>
  );
}
