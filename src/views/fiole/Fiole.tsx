import React, { createRef } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Header from "src/components/header/Header";
import Button from "react-bootstrap/Button";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ScrollTrigger, ScrollToPlugin, gsap } from "gsap/all";
import videojs, { VideoJsPlayer } from "video.js";
import BarNavigation from "src/components/barnavigation/BarNavigation";
import BarNavigationMobile from "src/components/barnavigationmobile/BarNavigationMobile";
import { ReduxAppState } from "../../store";
import { hasCompletedXp } from "../../store/root/actions";
import { RootActionTypes } from "../../store/root/types";
import { isMobile } from "mobile-device-detect";
import validcode from "../../utils/logincode";

import "./Fiole.css";
import fiole from "./Fiole_BIG.jpg";
import arrowDown from "src/assets/img/Arrow_down.png";
import arrowDown2x from "src/assets/img/Arrow_down@2x.png";
import videoMobile from "./FIOLES_anim_mobile.mp4";
import videoMobileWebm from "./FIOLES_anim_mobile.webm";
import ModalChecklist from "src/components/modalchecklist/ModalChecklist";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const options = {
  html5: true,
  fluid: true,
  loop: false,
  controls: false,
  fill: true,
  preload: "auto"
};

type StateProps = {
  code?: string;
};
type DispatchProps = {
  hasCompletedXp: () => RootActionTypes;
};

type Prop = StateProps & DispatchProps & WithTranslation & RouteComponentProps;
type State = {
  checklistModalOpen: boolean;
};
class Fiole extends React.Component<Prop, State> {
  private ref = createRef<HTMLDivElement>();
  private videoJs: VideoJsPlayer | null = null;

  constructor(props: Prop) {
    super(props);
    this.state = {
      checklistModalOpen: false
    };
    this.props.hasCompletedXp();
  }

  componentDidMount(): void {
    setTimeout(function () {
    //   gsap.to(window, {
    //     scrollTo: {
    //       y: "#flacon-scroll-end",
    //       offsetY:
    //         screen.height -
    //         ((document.getElementById("flacon-scroll-end") as HTMLDivElement)
    //           .offsetHeight || 0)
    //     },
    //     duration: 8
    //   });
    }, 1000);
    if (this.ref.current) {
      if (!isMobile) {
        const sections = this.ref.current.querySelectorAll("section");
        sections.forEach((section, index) => {
          if (index > 1) {
            ScrollTrigger.create({
              trigger: section,
              onEnter: () => this._goToSection(section)
            });
          }
          /*ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            onEnterBack: () => this._goToSection(section),
          });*/
        });
      } else {
        const sections = this.ref.current.querySelectorAll(".videoContent");
        sections.forEach(section => {
          ScrollTrigger.create({
            trigger: section,
            onEnter: () => this.videoJs && this.videoJs?.play()
          });
        });
      }
    }
    this._setupVideoJs();
  }

  componentDidUpdate(): void {
    if (this.videoJs === null) {
      this._setupVideoJs();
    }
  }

  _goToSection = (section: HTMLElement) => {
    console.log("_goToSection", section.className);
    gsap.to(window, {
      scrollTo: { y: section, autoKill: false },
      duration: 1
    });
    if (
      isMobile &&
      section.className === "videoContent" &&
      this.videoJs !== null
    ) {
      this.videoJs.play();
    }
  };

  _setupVideoJs = (): void => {
    if (isMobile) {
      console.log("_setupVideoJs", this.videoJs);
      this.videoJs = videojs(
        document.querySelector(".videoContent video"),
        options
      );
      this.videoJs.one("ended", () => this._onVideoEnd());
      this.videoJs.muted(true);
      this.videoJs.loop(false);
      this.videoJs.playsinline(true);
      this.videoJs.autoplay("muted");
      this.videoJs.autoplay(true);
    }
  };

  _dispose = (): void => {
    console.log("_dispose", this.videoJs);
    if (this.videoJs !== null) {
      this.videoJs.dispose();
      this.videoJs = null;
    }
  };

  _onVideoEnd = (): void => {
    console.log("_onVideoEnd");
    gsap.to(".video-js", {
      autoAlpha: 0,
      display: "none",
      duration: 1
    });
    gsap.to(".fiole-content", {
      autoAlpha: 1,
      display: "block",
      duration: 1
    });
    this.props.hasCompletedXp();
  };

  render() {
    const { t, history, code } = this.props;
    const { checklistModalOpen } = this.state;
    return (
      <div className="fiole">
        <Header />
        <div ref={this.ref} className="mainContent">
          <section className="flacon">
            <img className="img-fiole" src={fiole} />
          </section>
          <section id="flacon-scroll-end" className="flacon-scroll">
            <p>{t("fiole.defilezfairevibrer")}</p>
            <img className="arrow-down" src={arrowDown} srcSet={arrowDown2x} />
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <section className="videoContent">
            {isMobile && (
              <video
                className={`video-js vjs-control-bar`}
                muted
                playsInline
                webkit-playsinline="true"
                controls={false}
              >
                <source src={videoMobile} type="video/mp4" />
                <source src={videoMobileWebm} type="video/webm" />
              </video>
            )}
            <div className="fiole-content">
              {isMobile ? (
                <BarNavigationMobile
                  onShare={() => {
                    this.setState({ checklistModalOpen: true });
                  }}
                />
              ) : (
                <BarNavigation
                  onShare={() => {
                    this.setState({ checklistModalOpen: true });
                  }}
                />
              )}
              <div className="checklist-action">
                <div className="download-assets">
                  <Button
                    variant="outline-light"
                    href={code ? validcode[code].downloadLinkPress : undefined}
                  >
                    {t("main.downloadassets.press")}
                  </Button>
                  <Button
                    variant="outline-light"
                    href={code ? validcode[code].downloadLinkRs : undefined}
                  >
                    {t("main.downloadassets.rs")}
                  </Button>
                </div>
                <div
                  style={{ width: "100%", position: "relative", height: 40 }}
                >
                  <Button
                    onClick={() => {
                      history.push("main");
                    }}
                    className="homepage"
                    variant="outline-light"
                  >
                    {t("fiole.homepage")} &gt;
                  </Button>
                </div>
              </div>
              <ModalChecklist
                isOpen={checklistModalOpen}
                onClose={() => this.setState({ checklistModalOpen: false })}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxAppState): StateProps => {
  return {
    code: state.code
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    hasCompletedXp: () => dispatch(hasCompletedXp())
  };
};

export default connect<StateProps, DispatchProps, unknown, ReduxAppState>(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(withRouter(Fiole)));
