import {useTranslation} from "react-i18next";

export default function useTranslationWithPrefix(prefix: string) {
  const { t } = useTranslation();
  const tp = (key: string, options?: any): any => t(`${prefix}.${key}`, options)
  return {
    t,
    tp
  }
}
