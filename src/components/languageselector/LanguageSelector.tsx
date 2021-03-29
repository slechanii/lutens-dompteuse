import React, {FormEvent, useState} from 'react';
import {useTranslation} from 'react-i18next';

import EN_default from './Button_EN_Default.png';
import EN_default2x from './Button_EN_Default@2x.png';
import EN_hover from './Button_EN_Hover.png';
import EN_hover2x from './Button_EN_Hover@2x.png';

import FR_default from './Button_FR_Default.png';
import FR_default2x from './Button_FR_Default@2x.png';
import FR_hover from './Button_FR_Hover.png';
import FR_hover2x from './Button_FR_Hover@2x.png';

import './LanguageSelector.css';

const LanguageSelector = (): JSX.Element => {
  const {i18n} = useTranslation();
  const [hoverLang, setHoverLang] = useState('');

  const changeLanguage = (event: FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    i18n.changeLanguage(event.currentTarget.value);
  };

  return (
    <div className="language-selector">
      <label htmlFor="fr">
        <img
          className="clickable"
          src={hoverLang === 'fr' ? FR_hover : FR_default}
          srcSet={hoverLang === 'fr' ? FR_hover2x : FR_default2x}
          onMouseOver={() => setHoverLang('fr')}
          onMouseOut={() => setHoverLang('')}
        />
        <input id="fr" type="radio" style={{display: 'none'}} value="fr" name="language" onChange={changeLanguage} />
      </label>
      <label htmlFor="en">
        <img
          className="clickable"
          src={hoverLang === 'en' ? EN_hover : EN_default}
          srcSet={hoverLang === 'en' ? EN_hover2x : EN_default2x}
          onMouseOver={() => setHoverLang('en')}
          onMouseOut={() => setHoverLang('')}
        />
        <input id="en" type="radio" style={{display: 'none'}} value="en" name="language" onChange={changeLanguage} />
      </label>
      {/*<label htmlFor="es">
        <img
          className="clickable"
          src={hoverLang === 'es' ? ES_hover : ES_default}
          srcSet={hoverLang === 'es' ? ES_hover2x : ES_default2x}
          onMouseOver={() => setHoverLang('es')}
          onMouseOut={() => setHoverLang('')}
        />
        <input id="es" type="radio" style={{display: 'none'}} value="es" name="language" onChange={changeLanguage} />
      </label>*/}
      {/*<label htmlFor="en">
        <input id="zh-hk" type="radio" value="zh-hk" name="language" onChange={changeLanguage} />
      </label>*/}
    </div>
  );
};

export default LanguageSelector;
