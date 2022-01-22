import React, { ReactNode } from 'react';
import {
  IntlProvider,
  FormattedMessage,
  MessageDescriptor as BaseMessageDescriptor,
} from 'react-intl';

import locale_en from '../locale/en.json';
import locale_de from '../locale/de.json';

const locales: Record<string, any> = {
  en: locale_en,
  de: locale_de,
};

const languagePreferredByUser =
  navigator.languages?.find((entry: string) => locales[entry]) ?? // `languages` is experimental but with good support and lists all user languages
  navigator.language.split(/[-_]/)[0]; // fallback, only one language

export function LocaleWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <IntlProvider
      locale={languagePreferredByUser}
      messages={locales[languagePreferredByUser] ?? locales.en}
    >
      {children}
    </IntlProvider>
  );
}

export interface MessageDescriptor extends BaseMessageDescriptor {
  values?: Record<string, string | number | boolean | null | undefined | Date | JSX.Element>;
}

const htmlValues = {
  b: (chunks: ReactNode) => <strong>{chunks}</strong>,
  i: (chunks: ReactNode) => <i>{chunks}</i>,
  ul: (chunks: ReactNode) => <ul>{chunks}</ul>,
  p: (chunks: ReactNode) => <p>{chunks}</p>,
  br: <br />,
};

export function Translate({
  id,
  defaultMessage,
  description,
  values,
}: MessageDescriptor): JSX.Element {
  return (
    <FormattedMessage
      id={id}
      defaultMessage={defaultMessage}
      description={description}
      values={{ ...htmlValues, ...values }}
    />
  );
}
