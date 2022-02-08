import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import {
  IntlProvider,
  FormattedMessage,
  MessageDescriptor as BaseMessageDescriptor,
} from 'react-intl';
import { useLocalStorageState } from '../utils/hooks';

import locale_en from '../locale/en.json';
import locale_de from '../locale/de.json';

export { useIntl } from 'react-intl';

export interface LocaleContextValue {
  locale: string;
  locales: string[];
  messages: Record<string, string>;
  setLocale: (locale: string) => void;
}

const localeMap: Record<string, any> = {
  en: locale_en,
  de: locale_de,
};

const languagePreferredByUser =
  navigator.languages?.find((entry: string) => localeMap[entry]) ?? // `languages` is experimental but with good support and lists all user languages
  navigator.language.split(/[-_]/)[0]; // fallback, only one language

const LocaleContext = createContext<LocaleContextValue>({} as LocaleContextValue);

export const useLocale = (): LocaleContextValue => useContext(LocaleContext);

export function LocaleProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [locale, setLocale] = useLocalStorageState<string>('locale', languagePreferredByUser);

  const contextValue = useMemo(() => {
    const locales = Object.keys(localeMap);
    const messages = { ...localeMap.en, ...localeMap[locale] }; // merge in defaults in case some keys are untranslated
    return { locale, setLocale, locales, messages };
  }, [locale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      <IntlProvider locale={locale} messages={contextValue.messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
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

export function Translate({ id, description, values }: MessageDescriptor): JSX.Element {
  return (
    <FormattedMessage id={id} description={description} values={{ ...htmlValues, ...values }} />
  );
}
