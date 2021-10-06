import {useTranslation} from "react-i18next";

export default function useTranslationWithPrefix(prefix: string) {
  const { t } = useTranslation();
  const tp = (key: string) => t(`${prefix}.${key}`)
  return {
    t,
    tp
  }
}
