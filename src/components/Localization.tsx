import React, { ReactNode } from 'react';
import {
  IntlProvider,
  FormattedMessage,
  MessageDescriptor as BaseMessageDescriptor,
} from 'react-intl';
import { LanguageSwitch } from './LanguageSwitch';
import { useLocalStorageState } from '../utils/hooks';

export { useIntl } from 'react-intl';

import locale_en from '../locale/en.json';
import locale_de from '../locale/de.json';

const locales: Record<string, any> = {
  en: locale_en,
  de: locale_de,
};

const languagePreferredByUser =
  navigator.languages?.find((entry: string) => locales[entry]) ?? // `languages` is experimental but with good support and lists all user languages
  navigator.language.split(/[-_]/)[0]; // fallback, only one language

export function LocaleProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [locale, setLocale] = useLocalStorageState('locale', languagePreferredByUser);
  return (
    <IntlProvider locale={locale} messages={locales[locale] ?? locales.en}>
      {children}

      <LanguageSwitch
        activeLanguage={locale}
        languages={Object.keys(locales)}
        onChange={setLocale}
      />
    </IntlProvider>
  );
}

export interface MessageDescriptor extends BaseMessageDescriptor {
  values?: Record<string, string | number | boolean | null | undefined | Date | React.ReactNode>;
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
