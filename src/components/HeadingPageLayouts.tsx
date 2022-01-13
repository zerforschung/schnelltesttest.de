import React from 'react';
import LogoHeader from './LogoHeader';
import { TextHeader } from './TextHeader';
import { BigBackButton } from './Buttons';

export function HeadingPage({
  header,
  children,
}: {
  header: JSX.Element;
  children: React.ReactNode;
}): JSX.Element {
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
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 2em 1em 2em',
          maxWidth: '800px',
          width: '100%',
          flexGrow: 1,
        }}
      >
        {header}

        {children}
      </div>
    </div>
  );
}

export function LogoHeadingPage({ children }: { children: React.ReactNode }): JSX.Element {
  return <HeadingPage header={<LogoHeader />}>{children}</HeadingPage>;
}

export function TextHeadingPage({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <HeadingPage header={<TextHeader text={heading} />}>
      {children}
      <BigBackButton content={'Zurück'} />
    </HeadingPage>
  );
}
