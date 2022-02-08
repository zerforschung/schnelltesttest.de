import React from 'react';
import { useLocale } from './Localization';
import { languageNameMap } from './languageNameMap';

const selectStyles = {
  padding: 4,
  borderRadius: 0,
  border: '2px solid black',
  fontSize: '1rem',
};

export function LanguageSwitch(): JSX.Element {
  const { locale, locales, setLocale } = useLocale();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setLocale(event.target.value);

  return (
    <select defaultValue={locale} onChange={handleChange} style={selectStyles}>
      {locales.map((key) => (
        <option key={key} value={key}>
          {languageNameMap[key]}
        </option>
      ))}
    </select>
  );
}
