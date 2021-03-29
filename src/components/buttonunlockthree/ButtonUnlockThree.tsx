import React, {useState} from 'react';
import imageEnDefault from './Button_3-EN_Unlock_Default.png';
import imageEnHover from './Button_3-EN_Unlock_hover.png';
import imageEnSelected from './Button_3-EN_Unlock_selected.png';
import imageFrDefault from './Button_3-FR_Unlock_Default.png';
import imageFrHover from './Button_3-FR_Unlock_hover.png';
import imageFrSelected from './Button_3-FR_Unlock_selected.png';
import imageEsDefault from './Button_3-ES_Unlock_Default.png';
import imageEsHover from './Button_3-ES_Unlock_hover.png';
import imageEsSelected from './Button_3-ES_Unlock_selected.png';
import './ButtonUnlockThree.css';

type Props = {
  lang: string;
  className?: string;
  onClick?: () => void;
};

function ButtonUnlockThree(props: Props): JSX.Element {
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
      className={`clickable btn-unlock btn-unlock-three ${props.className ?? ''}`}
      src={push ? imageSelected : hover ? imageHover : imageDefault}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onMouseDown={() => setPush(true)}
      onMouseUp={() => setPush(false)}
      onClick={props.onClick}
    />
  );
}

export default ButtonUnlockThree;
