import React, {createRef} from 'react';
import videojs, {VideoJsPlayer} from 'video.js';
import gsap from 'gsap';
import Modal from 'react-modal';
import {isMobile} from 'mobile-device-detect';
import Mute from '../mute/Mute';

import './VideoModal.css';
import {ReduxAppState} from 'src/store';
import {connect} from 'react-redux';
import {RootActionTypes} from 'src/store/root/types';
import {muteVideo, unmuteVideo} from 'src/store/root/actions';
import {Dispatch} from 'redux';

Modal.setAppElement('#root');

type StateProps = {
  videoMuted: boolean;
};
type DispatchProps = {
  muteVideo: () => RootActionTypes;
  unmuteVideo: () => RootActionTypes;
};

type OwnProps = {
  isOpen: boolean;
  video: string;
  videoWebm: string;
  hasMuteAnimation?: boolean;
  onVideoEnded?: () => void;
};

type Props = OwnProps & StateProps & DispatchProps;

const styles: Modal.Styles = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    inset: 0,
    width: '100vw',
    height: '100vh',
    padding: 0,
    overflow: 'hidden',
    border: 'none',
    zIndex: 3000,
    backgroundColor: 'black',
  },
  overlay: {
    zIndex: 10,
    backgroundColor: 'black',
  },
};

const options = {
  html5: true,
  fluid: true,
  loop: false,
  /*muted: true,*/
  controls: false,
  fill: true,
  preload: 'auto',
};

class VideoModal extends React.Component<Props> {
  private ref = createRef<HTMLDivElement>();
  private videoJs: VideoJsPlayer | null = null;

  componentDidUpdate(): void {
    if (this.videoJs === null) {
      this._setupVideoJs();
    }
  }

  _setupVideoJs = (): void => {
    console.log('_setupVideoJs');
    const videoElement = this.ref.current?.querySelector('video');
    console.log({videoElement, ref: this.ref.current});
    if (videoElement !== undefined && videoElement !== null) {
      this.videoJs = videojs(videoElement, options);
      this.videoJs.one('ended', () => this._onVideoEnd());
      this.videoJs.muted(this.props.videoMuted);
      this.videoJs.loop(false);
      this.videoJs.playsinline(true);
      this.videoJs.autoplay(true);
      if (isMobile) {
        this.videoJs.play();
      }
    }
  };

  _dispose = (): void => {
    console.log('_dispose');
    if (this.videoJs !== null) {
      this.videoJs.dispose();
      this.videoJs = null;
    }
  };

  _onVideoEnd = (): void => {
    console.log('_onVideoEnd');
    gsap
      .timeline({
        onComplete: () => {
          if (this.props.onVideoEnded) {
            this.props.onVideoEnded();
          }
        },
      })
      .to(this.ref.current, {opacity: 0, duration: 3});
  };

  _onAfterOpen = (): void => {
    console.log('_onAfterOpen');
    this._setupVideoJs();
    gsap.fromTo(this.ref.current, {opacity: 0}, {opacity: 1, duration: 3});
  };

  render(): JSX.Element {
    const {isOpen, video, videoWebm, videoMuted, hasMuteAnimation} = this.props;
    return (
      <Modal isOpen={isOpen} style={styles} onAfterOpen={this._onAfterOpen}>
        <div className="video-modal" ref={this.ref}>
          <video
            className={`video-js vjs-control-bar ${isMobile ? '' : 'vjs-16-9'}`}
            muted={videoMuted}
            playsInline
            webkit-playsinline="true"
            controls={false}>
            <source src={video} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
          </video>
          <Mute
            isAnimated={hasMuteAnimation}
            className="mute"
            isMuted={videoMuted}
            onClick={() => {
              videoMuted ? this.props.unmuteVideo() : this.props.muteVideo();
              this.videoJs?.muted(!videoMuted);
            }}
          />
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
)(VideoModal);
