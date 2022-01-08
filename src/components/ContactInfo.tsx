import React from 'react';
function ContactButton({ href, text }: { href: string; text: string }): JSX.Element {
  return (
    <a
      style={{
        width: '60%',
        padding: '1rem',
        marginBottom: '.5em',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
          fontWeight: 'bold',
          fontFamily: 'Open Sans',
        borderRadius: '2em',
        fontSize: '1em',
        textDecoration: 'none',
        textAlign: 'center',
      }}
      href={href}
    >
      {text}
    </a>
  );
}
export function ContactInfo(): JSX.Element {
  return (
    <>
      <ContactButton href={'mailto:schnelltest@zerforschung.org'} text={'E-Mail'} />
      <ContactButton href={'https://twitter.com/zerforschung'} text={'Twitter'} />
      <ContactButton href={'https://chaos.social/@zerforschung'} text={'Mastodon'} />
    </>
  );
}
