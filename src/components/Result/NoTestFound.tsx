import React from 'react';
import { TextHeader } from '../TextHeader';
import { BigBackButton } from '../Buttons';

function ContactButton({ href, text }: { href: string; text: string }): JSX.Element {
  return (
    <a style={{ width: '60%', padding: '1rem', marginBottom: '.5em',           backgroundColor: 'black',
      color: 'white',
      border: 'none',
      borderRadius: '2em',
      fontSize: '1em', textDecoration: 'none', textAlign: 'center'}} href={href}>

        {text}
    </a>
  );
}
export default function NoTestFound({ test_id }: { test_id: string }): JSX.Element {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextHeader text={'Hilf Uns!'} />
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 2em',
          maxWidth: '800px',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Huch, diesen Test kennen wir garnicht!{' '}
        </h1>
        <p style={{textAlign: "justify"}}>
          Leider kennen wir den Test mit der Nummer <b>"{test_id}"</b> noch nicht. Es wäre cool, wenn du
          uns ein Foto des Tests, des Barcodes und die Marke schicken könntest. Wir tragen den Test
          dann in den nächsten Tagen ein.
        </p>
        <p>Du erreichst uns per:</p>
        <ContactButton href={'mailto:schnelltest@zerforschung.org'} text={'E-Mail'} />
        <ContactButton href={'https://twitter.com/zerforschung'} text={'Twitter'} />
        <ContactButton href={'https://chaos.social/@zerforschung'} text={'Mastodon'} />
        <BigBackButton content={"Zurück"}/>
      </div>
    </div>
  );
}
