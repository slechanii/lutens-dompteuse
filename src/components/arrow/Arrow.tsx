import React, {useState} from 'react';
import arrowLogo from './Arrow_Back.png';
import arrowTopLogo from './arrow_up_default.png';
import arrowTopLogoHover from './arrow_up_hover.png';
import arrowLogoHover from './Arrow_Back_hover.png';
import './Arrow.css';

type Props = {
  className?: string;
  direction: 'left' | 'right' | 'top';
  onClick?: () => void;
};

function Arrow(props: Props): JSX.Element {
  const {direction} = props;
  const [hover, setHover] = useState(false);
  let src;
  if (hover) {
    src = direction === 'top' ? arrowTopLogoHover : arrowLogoHover;
  } else {
    src = direction === 'top' ? arrowTopLogo : arrowLogo;
  }
  return (
    <img
      className={`clickable arrow-back arrow-${direction} ${props.className ?? ''}`}
      src={src}
      onClick={props.onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}

export default Arrow;
