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
        Leider konnte der Barcodescanner nicht auf Deine Kamera zugreifen.
        {engineName === 'Blink'
          ? ' Bitte klicke auf das Kamera- oder Schloss-Icon in der Adressleiste, erlaube den Kamerazugriff und lade die Seite neu'
          : ' Bitte lade die Seite neu und erlaube den Kamerazugriff'}
        , damit du Deinen Code scannen kannst. Oder{' '}
        <Link to={'/search'}>gib den Code manuell ein.</Link>
      </div>
    </div>
  );
}
