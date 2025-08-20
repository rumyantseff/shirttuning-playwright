import translations from '../i18n/translations.json';

export function getLangFromBaseURL(baseURL: string): string {
  if (baseURL.includes('.sk')) return 'sk';
  if (baseURL.includes('.cz')) return 'cz';
  if (baseURL.includes('.de')) return 'de';
  if (baseURL.includes('.nl')) return 'nl';
  return 'it';
}

export function t(lang: string) {
  return (translations as any)[lang];
}
