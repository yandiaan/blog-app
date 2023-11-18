import { useLang } from '../lib/langContext';
import { translationsEn } from '../lang/en';
import { translationsId } from '../lang/id';

export const useTranslations = () => {
  const { lang } = useLang();

  return lang === 'en' ? translationsEn : translationsId;
};
