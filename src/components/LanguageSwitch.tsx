import React from 'react';

type LanguageSwitchProps = {
  activeLanguage: string;
  languages: string[];
  onChange: (value: string) => void;
};

export function LanguageSwitch({
  activeLanguage,
  languages,
  onChange,
}: LanguageSwitchProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value);

  return (
    <select onChange={handleChange} style={{ position: 'absolute', top: '1em', right: '1em' }}>
      {languages.map((key) => (
        <option key={key} selected={key === activeLanguage}>
          {key}
        </option>
      ))}
    </select>
  );
}
