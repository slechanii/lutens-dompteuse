import React from 'react';
import {withTranslation, WithTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import ButtonUnlockOne from 'src/components/buttonunlockone/ButtonUnlockOne';
import ButtonUnlockThree from 'src/components/buttonunlockthree/ButtonUnlockThree';
import ButtonUnlockTwo from 'src/components/buttonunlocktwo/ButtonUnlockTwo';
import Header from 'src/components/header/Header';
import ModalChecklist from 'src/components/modalchecklist/ModalChecklist';
import {ReduxAppState} from 'src/store';
import Button from 'react-bootstrap/Button';
import validcode from '../../utils/logincode';
import {ScrollTrigger, gsap} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

import arrowDown from 'src/assets/img/Arrow_down.png';
import arrowDown2x from 'src/assets/img/Arrow_down@2x.png';
import './Main.css';

type StateProps = {
  hasCompletedXp: boolean;
  code?: string;
  hasVoted: boolean;
};

type OwnProps = {
  fade_anim: boolean;
};

type Prop = StateProps & WithTranslation & RouteComponentProps & OwnProps;

type State = {
  checklistModalOpen: boolean;
  showArrow: boolean;
};

class Main extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    const {hasCompletedXp, hasVoted} = props;
    this.state = {
      checklistModalOpen: hasCompletedXp && !hasVoted,
      showArrow: true,
    };
  }

  componentDidMount() {
    gsap.to(window, {
      scrollTo: {
        y: 0,
      },
      duration: 1,
    });
    ScrollTrigger.create({
      trigger: '#main-bottom',
      start: 'bottom bottom',
      onEnter: () => {
        this.setState({showArrow: false});
      },
      onLeaveBack: () => {
        this.setState({showArrow: true});
      },
    });
  }

  componentDidUpdate(prevProp: Prop) {
    const {hasCompletedXp} = this.props;
    if (prevProp.hasCompletedXp !== hasCompletedXp) {
      this.setState({checklistModalOpen: hasCompletedXp});
    }
  }

  render() {
    const {checklistModalOpen} = this.state;
    const {t, history, code, i18n, fade_anim} = this.props;

    const fade_anim_class = fade_anim ? ' fade-anim ' : ' full-opacity ';

    // const {t, history, code, i18n} = this.props;
    const lang = i18n.language;
    return (
      <div className={`main ${fade_anim_class}  `}>
        <Header />
        <section className="section1">
          <p>{t('main.section1.text1')}</p>
          <p>{t('main.section1.text2')}</p>
          <p>
            {t('main.section1.text3')}
            <br />
            <b style={{fontWeight: 900}}>{t('main.section1.text4')}</b>
          </p>
          {/* <p>
            Pour ce premier voyage initiatique digital, nous vous invitons à vivre cette expérience comme une
            introspection.
          </p>
          <p>Laissez-vous guider par votre propre imaginaire, mais sachez que chaque étape compte </p>
          <p>
            De l’ombre à la lumière, de l’enfermement à la liberté, révélez l’insoupçonnée :
            <br />
            <b style={{fontWeight: 900}}>La dompteuse encagée.</b>
          </p> */}
        </section>
        {this.state.showArrow ? <img className="arrow-down" src={arrowDown} srcSet={arrowDown2x} /> : <></>}
        <section className="section2">
          <ButtonUnlockOne lang={lang} onClick={() => history.push({pathname: 'priseconscience'})} />
        </section>
        <section className="section3">
          <ButtonUnlockTwo lang={lang} onClick={() => history.push({pathname: 'delivrance'})} />
        </section>
        <section id="main-bottom" className="section4">
          <ButtonUnlockThree lang={lang} onClick={() => history.push({pathname: 'liberte'})} />
        </section>
        {/*
          <ModalChecklist isOpen={checklistModalOpen} onClose={() => this.setState({checklistModalOpen: false})} />
        */}
        <div className="download-assets">
          <Button href={code ? validcode[code].downloadLinkPress : undefined} variant="outline-light">
            {t('main.downloadassets.press')}
          </Button>
          <Button href={code ? validcode[code].downloadLinkRs : undefined} variant="outline-light">
            {t('main.downloadassets.rs')}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxAppState): StateProps => {
  return {
    hasCompletedXp: state.completedXp,
    code: state.code,
    hasVoted: state.hasVoted,
  };
};

export default connect<StateProps, unknown, unknown, ReduxAppState>(mapStateToProps)(
  withTranslation()(withRouter(Main)),
);
