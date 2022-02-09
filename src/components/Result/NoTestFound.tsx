import React from 'react';
import { TextHeadingPage } from '../HeadingPageLayouts';
import { ContactInfo } from '../ContactInfo';

export default function NoTestFound({ test_id }: { test_id: string }): JSX.Element {
  return (
    <TextHeadingPage heading={'Hilf Uns!'}>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 0.5em 0.5em 0.5em',
          maxWidth: '800px',
          fontFamily: 'Open Sans',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Huch, diesen Test kennen wir gar nicht!{' '}
        </h1>
        {/*<p style={{ justifyContent: 'center', textAlign: 'center' }}>*/}
        {/*  Leider konnten wir unter <b>"{test_id}"</b> keinen Test finden. Es wäre cool, wenn du uns*/}
        {/*  ein Foto des Tests, des Barcodes und die Marke schicken könntest.*/}
        {/*  <br />*/}
        {/*  <br /> Wir tragen den Test dann in den nächsten Tagen ein.*/}
        {/*</p>*/}
        {/*<p>Du erreichst uns per:</p>*/}
        {/*<ContactInfo />*/}
        <p style={{ justifyContent: 'center', textAlign: 'center' }}>
          Leider konnten wir unter <b>"{test_id}"</b> keinen Test finden. Wir haben inzwischen fast
          9000 E-Mails mit weiteren Tests bekommen, die wir aktuell erst einmal abarbeiten müssen.
          Vermutlich ist dein Test bereits dabei und du findest ihn hier in ein paar Tagen.
        </p>
        <p>Für weitere Fragen erreichst du uns unter</p>
        <ContactInfo />
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
