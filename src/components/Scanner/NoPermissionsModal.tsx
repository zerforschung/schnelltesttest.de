import React from 'react';
import { Link } from 'react-router-dom';
import { engineName } from 'react-device-detect';

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
        Leider konnten wir keinen Zugriff auf deine Kamera bekommen.
        {engineName === 'Blink'
          ? ' Bitte klicke auf das Kamera-Icon in der Adressleiste, erlaube den Kamerazugriff und lade die Seite neu'
          : ' Bitte lade die Seite neu und erlaube den Kamerazugriff'}
        , damit du deinen Code scannen kannst. Oder{' '}
        <Link to={'/search'}>gib den Code selbst ein.</Link>
      </div>
    </div>
  );
}
