import {useTranslation} from "react-i18next";

/**
 * facilitates translation by attaching a prefix to every use of the `tp` method
 * @param prefix
 */
export default function useTranslationWithPrefix(prefix: string) {
  const { t } = useTranslation();
  const tp = (key: string, options?: any): any => t(`${prefix}.${key}`, options)
  return {
    t,
    tp
  }
}
