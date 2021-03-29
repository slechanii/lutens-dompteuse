import React, {useState} from 'react';
import playLogo from './Play.png';
//import playLogoHover from './Play_Hover.png';
import './PlayButton.css';

type Props = {
  className?: string;
  show: boolean;
  onClick?: () => void;
};

function PlayButton(props: Props): JSX.Element {
  const {onClick} = props;
  const [hover, setHover] = useState(false);
  const src = hover ? playLogo : playLogo;
  return props.show ? (
    <img
      className={`clickable playButton ${props.className ?? ''} ${hover ? 'hover' : ''}`}
      src={src}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  ) : (
    <></>
  );
}

export default PlayButton;
