import React from 'react';
import { Translate } from '../components/Localization';
import { TextHeadingPage } from '../components/HeadingPageLayouts';
import { ContactInfo } from '../components/ContactInfo';
import { LinkFooter } from '../components/LinkFooter';
import zerlogo from '../components/About/ZER_Logo_header.svg';
import './Scanner.css';

export default function About(): JSX.Element {
  return (
    <TextHeadingPage heading={<Translate id="app.about" />}>
      <Translate
        id="app.aboutContent"
        values={{
          peiStudyLink: (title: string) => (
            <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile">
              {title}
            </a>
          ),
        }}
      />

      <ContactInfo />

      <div style={{ flexGrow: 1 }}></div>

      <p style={{ width: '100%', textAlign: 'center' }}>
        <Translate
          id="app.linkToRepo"
          values={{
            repoLink: (title: string) => (
              <a href="https://github.com/zerforschung/schnelltesttest.de">{title}</a>
            ),
          }}
        />
      </p>

      <p style={{ fontWeight: 300, textAlign: 'center' }}>
        <Translate id="app.presentedBy" />
        <a href="https://zerforschung.org">
          <img style={{ width: '100%', height: '5em' }} src={zerlogo} />
        </a>
      </p>

      <LinkFooter />
    </TextHeadingPage>
  );
}
