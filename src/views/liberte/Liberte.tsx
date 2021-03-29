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

import video3 from './VIDEO 3_desktop.mp4';
import video3webm from './VIDEO 3_desktop.webm';
import video4 from './VIDEO 4_desktop.mp4';
import video4webm from './VIDEO 4_desktop.webm';
import videoC from './VIDEO C_desktop.mp4';
import videoCwebm from './VIDEO C_desktop.webm';
import video5mp4 from './PAGE_E-Etape 5_desktop.mp4';
import video5webm from './PAGE_E-Etape 5_desktop.webm';

import videoMobile3 from './VIDEO 3_mobile.mp4';
import videoMobile3webm from './VIDEO 3_mobile.webm';
import videoMobile4 from './VIDEO 4_mobile.mp4';
import videoMobile4webm from './VIDEO 4_mobile.webm';
import videoCMobile from './VIDEO C_mobile.mp4';
import videoCMobilewebm from './VIDEO C_mobile.webm';
import videoMobile5mp4 from './PAGE_E-Etape 5_mobile.mp4';
import videoMobile5webm from './PAGE_E-Etape 5_mobile.webm';

import flower from './Amandes_E_Lab_3.png';
import thumbnailNext from './Next.png';
import thumbnailPrevious from './Previous.png';
import imageMobileBackground from './Background_3-2_Slideshow_Mobile.jpg';

import './Liberte.css';

type LocationState = {
  from?: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Prop = WithTranslation & RouteComponentProps<{}, StaticContext, LocationState>;
type State = {
  showFirstVideo: boolean;
  lastModalOpened: boolean;
  showModalCarousel: boolean;
};

class Liberte extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      showFirstVideo: props.location.state?.from === undefined,
      lastModalOpened: false,
      showModalCarousel: false,
    };
  }

  _onFinish = () => {
    this.setState({lastModalOpened: false});
    this.props.history.push({pathname: 'fiole'});
  };

  render() {
    const {history, t, i18n} = this.props;
    const {lastModalOpened, showModalCarousel, showFirstVideo} = this.state;
    return (
      <div
        className="liberte"
        style={{['--background-image' as never]: `var(--background-image-${i18n.language.toLocaleLowerCase()})`}}>
        <VideoModal
          isOpen={showFirstVideo}
          video={isMobile ? videoMobile3 : video3}
          videoWebm={isMobile ? videoMobile3webm : video3webm}
          onVideoEnded={() => this.setState({showFirstVideo: false})}
        />
        <ModalCarousel
          isOpen={showModalCarousel}
          video1={isMobile ? videoCMobile : videoC}
          video1Webm={isMobile ? videoCMobilewebm : videoCwebm}
          video2={isMobile ? videoMobile5mp4 : video5mp4}
          video2Webm={isMobile ? videoMobile5webm : video5webm}
          video2HideMute={true}
          citation={t('liberte.subtilementamande')}
          citationSmall={t('liberte.lalibertecestdevoir')}
          image={flower}
          imageMobileBackground={imageMobileBackground}
          imageTitle={t('liberte.amandes')}
          description={t('liberte.lesquelquesnotesdamande', {returnObjects: true})}
          onClose={() => this.setState({showModalCarousel: false})}
        />
        <VideoModal
          isOpen={lastModalOpened}
          video={isMobile ? videoMobile4 : video4}
          videoWebm={isMobile ? videoMobile4webm : video4webm}
          onVideoEnded={this._onFinish}
        />
        <div className="section-arrow-left">
          <Arrow direction="left" onClick={() => history.push({pathname: 'delivrance', state: {from: 'liberte'}})} />
          <Thumbnail image={thumbnailPrevious} />
        </div>
        <div className="clickable-zone" onClick={() => this.setState({showModalCarousel: true})} />
        <div className="section-arrow-right">
          <Arrow direction="right" onClick={() => this.setState({lastModalOpened: true})} />
          <Thumbnail image={thumbnailNext} />
        </div>
        <Arrow direction="top" onClick={() => this.setState({showModalCarousel: true})} />
        <HomepageButton {...this.props}></HomepageButton>
      </div>
    );
  }
}

export default withTranslation()(withRouter(Liberte));
