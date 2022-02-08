import React from 'react';
import { Link } from 'react-router-dom';
import { engineName } from 'react-device-detect';
import { Translate } from '../Localization';

export function NoPermissionsModal(): JSX.Element {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        padding: '2em',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>
        <Translate id="app.noCameraPermission" />

        {engineName === 'Blink' ? (
          <Translate id="app.noAccessReloadBlink" />
        ) : (
          <Translate id="app.noAccessReload" />
        )}

        <Translate
          id="app.enterCodeManually"
          values={{ link: (title: string) => <Link to="/search">{title}</Link> }}
        />
      </div>
    </div>
  );
}
