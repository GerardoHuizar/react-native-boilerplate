/**
 * This will setup the i18n language files and locale data for your app.
 */
import { addLocaleData } from "react-intl"; //eslint-disable-line
import enLocaleData from "react-intl/locale-data/en";
import esLocaleData from "react-intl/locale-data/es";

import enTranslationMessages from "./translations/en.json";
import esTranslationMessages from "./translations/es.json";

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

export const DEFAULT_LOCALE = "en";

export const appLocales = ["en", "es"];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages("en", enTranslationMessages),
  es: formatTranslationMessages("es", esTranslationMessages),
};
