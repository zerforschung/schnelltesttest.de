import React from 'react';
import { Translate } from './Localization';
import { LanguageSwitch } from './LanguageSwitch';
import generatedGitInfo from '../generatedGitInfo.json';

export function LinkFooter(): JSX.Element {
  return (
    <div style={{ textAlign: 'center' }}>
      <a href="https://zerforschung.org/unterstuetzen/">
        <Translate id="app.support" defaultMessage="Unterstützen" />
      </a>
      {' | '}
      <a href="https://zerforschung.org/impressum/">
        <Translate id="app.imprint" defaultMessage="Impressum" />
      </a>
      {' | '}
      <LanguageSwitch />
      <br />
      <span style={{ fontSize: '0.75em', color: '#666' }}>
        <Translate id="app.version" defaultMessage="Version" />: {generatedGitInfo.gitCommitHash}
      </span>
    </div>
  );
}
