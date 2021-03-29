import React, {useState} from 'react';
import imageEnDefault from './Button_1-EN_Unlock_Default.png';
import imageEnHover from './Button_1-EN_Unlock_hover.png';
import imageEnSelected from './Button_1-EN_Unlock_selected.png';
import imageFrDefault from './Button_1-FR_Unlock_Default.png';
import imageFrHover from './Button_1-FR_Unlock_hover.png';
import imageFrSelected from './Button_1-FR_Unlock_selected.png';
import imageEsDefault from './Button_1-ES_Unlock_Default.png';
import imageEsHover from './Button_1-ES_Unlock_hover.png';
import imageEsSelected from './Button_1-ES_Unlock_selected.png';
import './ButtonUnlockOne.css';

type Props = {
  lang: string;
  className?: string;
  onClick?: () => void;
};

function ButtonUnlockOne(props: Props): JSX.Element {
  const {lang} = props;
  const [hover, setHover] = useState(false);
  const [push, setPush] = useState(false);
  let imageSelected;
  let imageHover;
  let imageDefault;
  if (lang === 'fr') {
    imageDefault = imageFrDefault;
    imageHover = imageFrHover;
    imageSelected = imageFrSelected;
  } else if (lang === 'en') {
    imageDefault = imageEnDefault;
    imageHover = imageEnHover;
    imageSelected = imageEnSelected;
  } else if (lang === 'es') {
    imageDefault = imageEsDefault;
    imageHover = imageEsHover;
    imageSelected = imageEsSelected;
  }
  return (
    <img
      className={`clickable btn-unlock btn-unlock-one ${props.className ?? ''}`}
      src={push ? imageSelected : hover ? imageHover : imageDefault}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onMouseDown={() => setPush(true)}
      onMouseUp={() => setPush(false)}
      onClick={props.onClick}
    />
  );
}

export default ButtonUnlockOne;
