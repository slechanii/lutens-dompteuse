import React from 'react';
import {withTranslation, WithTranslation} from 'react-i18next';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {StaticContext} from 'react-router';
import Arrow from 'src/components/arrow/Arrow';
import Thumbnail from 'src/components/thumbnail/Thumbnail';
import HomepageButton from 'src/components/homepageButton/HomepageButton';
import ModalCarousel from 'src/components/modalcarousel/ModalCarousel';
import VideoModal from '../../components/videomodal/VideoModal';
import {isMobile} from 'mobile-device-detect';

import flower from './Flower_C_Lab_1.png';
import thumbnailNext from './Next.png';
import thumbnailPrevious from './Previous.png';

import video1 from './VIDEO 1_desktop.mp4';
import video1webm from './VIDEO 1_desktop.webm';
import videoa from './VIDEO A_desktop.mp4';
import videoawebm from './VIDEO A_desktop.webm';
import video5 from './PAGE_C-Etape 5_desktop.mp4';
import video5webm from './PAGE_C-Etape 5_desktop.webm';

import videoMobile1 from './VIDEO 1_mobile.mp4';
import videoMobile1webm from './VIDEO 1_mobile.webm';
import videoMobilea from './VIDEO A_mobile.mp4';
import videoMobileawebm from './VIDEO A_mobile.webm';
import videoMobile5 from './PAGE_C-Etape 5_mobile.mp4';
import videoMobile5webm from './PAGE_C-Etape 5_mobile.webm';
import imageMobileBackground from './Background_1-2_Slideshow_Mobile.png';

import './PriseConscience.css';

type LocationState = {
  from?: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Prop = WithTranslation & RouteComponentProps<{}, StaticContext, LocationState>;
type State = {
  showFirstVideo: boolean;
  showModalCarousel: boolean;
};

class PriseConscience extends React.Component<Prop, State> {
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
        className="prise-conscience"
        style={{['--background-image' as never]: `var(--background-image-${i18n.language.toLocaleLowerCase()})`}}>
        <VideoModal
          isOpen={showFirstVideo}
          video={isMobile ? videoMobile1 : video1}
          videoWebm={isMobile ? videoMobile1webm : video1webm}
          hasMuteAnimation={true}
          onVideoEnded={() => this.setState({showFirstVideo: false})}
        />
        <ModalCarousel
          isOpen={showModalCarousel}
          video1={isMobile ? videoMobilea : videoa}
          video1Webm={isMobile ? videoMobileawebm : videoawebm}
          video2={isMobile ? videoMobile5 : video5}
          video2Webm={isMobile ? videoMobile5webm : video5webm}
          citation={t('priseconscience.decettefillefroide')}
          citationSmall={t('priseconscience.laprisedeconscience')}
          image={flower}
          imageMobileBackground={imageMobileBackground}
          imageTitle={t('priseconscience.ylang')}
          description={t('priseconscience.unebouteillejeteealamer', {returnObjects: true})}
          onClose={() => this.setState({showModalCarousel: false})}
        />
        <div className="section-arrow-left">
          <Arrow direction="left" onClick={() => history.push({pathname: 'main'})} />
          <Thumbnail image={thumbnailPrevious} />
        </div>
        <div className="clickable-zone" onClick={() => this.setState({showModalCarousel: true})} />
        <div className="section-arrow-right">
          <Arrow direction="right" onClick={() => history.push({pathname: 'delivrance'})} />
          <Thumbnail image={thumbnailNext} />
        </div>
        <Arrow direction="top" onClick={() => this.setState({showModalCarousel: true})} />
        <HomepageButton {...this.props}></HomepageButton>
      </div>
    );
  }
}

export default withTranslation()(withRouter(PriseConscience));
