import React, {createRef} from 'react';
import Modal from 'react-modal';
import Carousel from 'react-bootstrap/Carousel';
import videojs, {VideoJsPlayer} from 'video.js';
import {isMobile} from 'mobile-device-detect';

import closeBtn from '../../assets/img/button_close.png';
import closeBtn2x from '../../assets/img/button_close@2x.png';
import 'simplebar/dist/simplebar.min.css';
import './ModalCarousel.css';
import Mute from '../mute/Mute';
import PlayButton from '../playButton/PlayButton';
import {RootActionTypes} from 'src/store/root/types';
import {ReduxAppState} from 'src/store';
import {Dispatch} from 'redux';
import {muteVideo, unmuteVideo} from 'src/store/root/actions';
import {connect} from 'react-redux';

const options = {
  html5: true,
  fluid: true,
  loop: false,
  controls: false,
  fill: true,
  preload: 'auto',
};

Modal.setAppElement('#root');

const styles: Modal.Styles = {
  overlay: {
    zIndex: 10,
    background: 'rgba(0,0,0,0.9)',
  },
  content: {
    border: 'none',
    padding: 0,
    backgroundColor: 'black',
    top: 30,
    bottom: 30,
    left: 20,
    right: 20,
  },
};

type StateProps = {
  videoMuted: boolean;
};
type DispatchProps = {
  muteVideo: () => RootActionTypes;
  unmuteVideo: () => RootActionTypes;
};

type OwnProps = {
  isOpen: boolean;
  video1: string;
  video1Webm: string;
  video2: string;
  video2Webm: string;
  video2HideMute?: boolean;
  citation: string;
  citationSmall: string;
  image: string;
  imageMobileBackground: string;
  imageTitle: string;
  description: string[] | string;
  onClose?: () => void;
};

type Props = OwnProps & StateProps & DispatchProps;

type State = {
  slideIndex: number;
  previousSlideIndex?: number;
  video1Ended: boolean;
  video2Ended: boolean;
};

class ModalCarousel extends React.Component<Props, State> {
  private video1Ref = createRef<HTMLVideoElement>();
  private video2Ref = createRef<HTMLVideoElement>();
  private videoJs1: VideoJsPlayer | null = null;
  private videoJs2: VideoJsPlayer | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      slideIndex: 0,
      video1Ended: false,
      video2Ended: false,
    };
  }
  componentDidUpdate(prevProps: Props): void {
    console.log('componentDidUpdate');
    if (this.state.previousSlideIndex !== this.state.slideIndex) {
      if (this.state.slideIndex === 0 && prevProps.isOpen === true) {
        this._setupVideoJs1();
      }
      if (this.state.slideIndex === 3 && prevProps.isOpen === true) {
        this._setupVideoJs2();
      }
      this.setState({previousSlideIndex: this.state.slideIndex});
    }
  }

  _setupVideoJs1 = (): void => {
    console.log('_setupVideoJs');
    console.log({video1Ref: this.video1Ref.current, videoJs1: this.videoJs1});
    if (this.videoJs1 === null && this.video1Ref.current !== undefined) {
      this.videoJs1 = videojs(this.video1Ref.current, options);
      this.videoJs1.on('ended', () => {
        this.setState({video1Ended: true});
      });
      this.videoJs1.on('play', () => {
        this.setState({video1Ended: false});
      });
      this.videoJs1.loop(false);
      this.videoJs1.muted(this.props.videoMuted);
      this.videoJs1.autoplay(true);
    } else if (this.videoJs1) {
      this.videoJs1.muted(this.props.videoMuted);
      this.videoJs1.play();
    }
    if (isMobile && this.videoJs1 !== null) {
      this.videoJs1.muted(this.props.videoMuted);
      this.videoJs1.play();
    }
  };
  _setupVideoJs2 = (): void => {
    console.log('_setupVideoJs');
    console.log({video2Ref: this.video2Ref.current, videoJs2: this.videoJs2});
    if (this.videoJs2 === null && this.video2Ref.current !== undefined) {
      this.videoJs2 = videojs(this.video2Ref.current, options);
      this.videoJs2.on('ended', () => {
        this.setState({video2Ended: true});
      });
      this.videoJs2.on('play', () => {
        this.setState({video2Ended: false});
      });
      this.videoJs2.loop(false);
      this.videoJs2.muted(this.props.videoMuted);
      this.videoJs2.autoplay(true);
    } else if (this.videoJs2) {
      this.videoJs2.muted(this.props.videoMuted);
      this.videoJs2.play();
    }
    if (isMobile && this.videoJs2 !== null) {
      this.videoJs2.muted(this.props.videoMuted);
      this.videoJs2.play();
    }
  };

  _dispose = (): void => {
    console.log('_dispose');
    if (this.videoJs1 !== null) {
      this.videoJs1.dispose();
      this.videoJs1 = null;
    }
    if (this.videoJs2 !== null) {
      this.videoJs2.dispose();
      this.videoJs2 = null;
    }
  };
  _onAfterOpen = (): void => {
    this._setupVideoJs1();
  };

  _onAfterClose = (): void => {
    this._dispose();
    this.setState({slideIndex: 0});
  };

  _toggleMute = (): void => {
    this.props.videoMuted ? this.props.unmuteVideo() : this.props.muteVideo();
    this.videoJs1?.muted(!this.props.videoMuted);
    this.videoJs2?.muted(!this.props.videoMuted);
  };

  render(): JSX.Element {
    const {slideIndex} = this.state;
    const {
      isOpen,
      onClose,
      video1,
      video1Webm,
      video2,
      video2Webm,
      citation,
      citationSmall,
      image,
      imageTitle,
      description,
      imageMobileBackground,
      videoMuted,
    } = this.props;
    let backgroundImage = '';
    if (slideIndex === 2 && isMobile) {
      backgroundImage = `url(${imageMobileBackground})`;
    } else if (slideIndex === 2) {
      backgroundImage = `var(--background-image-slide3)`;
    }
    return (
      <Modal isOpen={isOpen} style={styles} onAfterOpen={this._onAfterOpen} onAfterClose={this._onAfterClose}>
        <div
          className="modal-carousel"
          style={{
            ['--background-image' as never]: backgroundImage,
          }}>
          <Carousel interval={null} activeIndex={slideIndex} onSelect={(slideIndex) => this.setState({slideIndex})}>
            <Carousel.Item>
              <video
                ref={this.video1Ref}
                className="video-js custom-videojs"
                playsInline
                webkit-playsinline="true"
                controls={false}>
                <source src={video1} type="video/mp4" />
                <source src={video1Webm} type="video/webm" />
              </video>
              <Mute isMuted={videoMuted} onClick={this._toggleMute} />
              <PlayButton
                show={this.state.video1Ended}
                onClick={() => {
                  this.videoJs1?.play();
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <div className="section-2">
                <div className="section-2-content">
                  <h2 className="citation">{citation}</h2>
                  <h2 className="serge">Serge Lutens</h2>
                  <hr />
                  <small>{citationSmall}</small>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="section-3">
                <div className="section-3-content">
                  <img src={image} />
                  <div>
                    <h3>{imageTitle}</h3>
                    <div className="description">
                      {Array.isArray(description) ? (
                        description.map((d, index) => <p key={index}>{d}</p>)
                      ) : (
                        <p>{description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <video
                ref={this.video2Ref}
                className={'video-js custom-videojs'}
                playsInline
                webkit-playsinline="true"
                controls={false}>
                <source src={video2} type="video/mp4" />
                <source src={video2Webm} type="video/webm" />
              </video>
              {this.props.video2HideMute ? <></> : <Mute isMuted={videoMuted} onClick={this._toggleMute} />}
              <PlayButton
                show={this.state.video2Ended}
                onClick={() => {
                  this.videoJs2?.play();
                }}
              />
            </Carousel.Item>
          </Carousel>
          <div className="close-btn">
            <img src={closeBtn} srcSet={closeBtn2x} onClick={onClose} />
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state: ReduxAppState): StateProps => {
  return {
    videoMuted: state.videoMuted,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    muteVideo: () => dispatch(muteVideo()),
    unmuteVideo: () => dispatch(unmuteVideo()),
  };
};

export default connect<StateProps, DispatchProps, unknown, ReduxAppState>(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCarousel);
