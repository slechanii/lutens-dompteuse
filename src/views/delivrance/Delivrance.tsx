import React from 'react';
import {withTranslation, WithTranslation} from 'react-i18next';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {StaticContext} from 'react-router';
import HomepageButton from 'src/components/homepageButton/HomepageButton';
import Arrow from 'src/components/arrow/Arrow';
import Thumbnail from 'src/components/thumbnail/Thumbnail';
import VideoModal from '../../components/videomodal/VideoModal';
import ModalCarousel from 'src/components/modalcarousel/ModalCarousel';
import {isMobile} from 'mobile-device-detect';

import flower from './Flower_D_Lab_2.png';
import thumbnailNext from './Next.png';
import thumbnailPrevious from './Previous.png';
import imageMobileBackground from './Background_2-2_Slideshow_Mobile.png';

import video2mp4 from './VIDEO 2_desktop.mp4';
import video2webm from './VIDEO 2_desktop.webm';
import videobmp4 from './VIDEO B_desktop.mp4';
import videobwebm from './VIDEO B_desktop.webm';
import video5mp4 from './PAGE_D-Etape 5_desktop.mp4';
import video5webm from './PAGE_D-Etape 5_desktop.webm';

import videoMobile2mp4 from './VIDEO 2_mobile.mp4';
import videoMobile2webm from './VIDEO 2_mobile.webm';
import videoMobilebmp4 from './VIDEO B_mobile.mp4';
import videoMobilebwebm from './VIDEO B_mobile.webm';
import videoMobile5mp4 from './PAGE_D-Etape 5_mobile.mp4';
import videoMobile5webm from './PAGE_D-Etape 5_mobile.webm';

import './Delivrance.css';

type LocationState = {
  from?: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Prop = WithTranslation & RouteComponentProps<{}, StaticContext, LocationState>;
type State = {
  showFirstVideo: boolean;
  showModalCarousel: boolean;
};
class Delivrance extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      showFirstVideo: props.location.state?.from === undefined,
      showModalCarousel: false,
    };
  }
  render() {
    const {showModalCarousel, showFirstVideo} = this.state;
    const {history, t, i18n} = this.props;
    return (
      <div
        className="delivrance"
        style={{['--background-image' as never]: `var(--background-image-${i18n.language.toLocaleLowerCase()})`}}>
        <VideoModal
          isOpen={showFirstVideo}
          video={isMobile ? videoMobile2mp4 : video2mp4}
          videoWebm={isMobile ? videoMobile2webm : video2webm}
          onVideoEnded={() => this.setState({showFirstVideo: false})}
        />
        <ModalCarousel
          isOpen={showModalCarousel}
          video1={isMobile ? videoMobilebmp4 : videobmp4}
          video1Webm={isMobile ? videoMobilebwebm : videobwebm}
          video2={isMobile ? videoMobile5mp4 : video5mp4}
          video2Webm={isMobile ? videoMobile5webm : video5webm}
          citation={t('delivrance.cequavulablancheur')}
          citationSmall={t('delivrance.ladelivrance')}
          image={flower}
          imageMobileBackground={imageMobileBackground}
          imageTitle={t('delivrance.fleurfrangipanes')}
          description={t('delivrance.ledouceetdelicatefleur', {returnObjects: true})}
          onClose={() => this.setState({showModalCarousel: false})}
        />
        <div className="section-arrow-left">
          <Arrow
            direction="left"
            onClick={() => history.push({pathname: 'priseconscience', state: {from: 'delivrance'}})}
          />
          <Thumbnail image={thumbnailPrevious} />
        </div>
        <div className="clickable-zone" onClick={() => this.setState({showModalCarousel: true})} />
        <div className="section-arrow-right">
          <Arrow direction="right" onClick={() => history.push({pathname: 'liberte'})} />
          <Thumbnail image={thumbnailNext} />
        </div>
        <Arrow direction="top" onClick={() => this.setState({showModalCarousel: true})} />
        <HomepageButton {...this.props}></HomepageButton>
      </div>
    );
  }
}

export default withTranslation()(withRouter(Delivrance));
