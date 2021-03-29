import React, {useState, useEffect} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

import muteLogo from './Mute.png';
import muteLogoHover from './Mute_Hover.png';
import unmuteLogo from './Unmute.png';
import unmuteLogoHover from './Unmute_Hover.png';
import './Mute.css';

type StateProps = {
  className?: string;
  isMuted: boolean;
  isAnimated?: boolean;
  onClick?: () => void;
};

type Props = StateProps & WithTranslation;

function Mute(props: Props): JSX.Element {
  const {onClick, isMuted, isAnimated, t} = props;
  const [hover, setHover] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const src = !isMuted ? (hover ? unmuteLogoHover : unmuteLogo) : hover ? muteLogoHover : muteLogo;

  useEffect(() => {
    setTimeout(() => {
      setIsTimeout(true);
    }, 3000);
  });

  return (
    <div className={`mute-container ${isAnimated && !isTimeout && isMuted ? 'is-animated' : ''}`}>
      <img
        className={`clickable mute ${props.className ?? ''}`}
        src={src}
        onClick={onClick}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {isMuted ? (
        <p className="mute-text">
          <span>{t('video.unmute1')}</span>
          {t('video.unmute2')}
        </p>
      ) : null}
    </div>
  );
}

export default withTranslation()(Mute);
