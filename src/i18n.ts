import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';
import yaml from 'js-yaml';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    backend: {
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.yaml',
      parse: (data: string) => {
        const jsondata = yaml.load(data);
        console.log(jsondata);
        return jsondata;
      },
    },
    fallbackLng: 'en',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
