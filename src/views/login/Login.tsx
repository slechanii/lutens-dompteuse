import React from 'react';
import {withTranslation, WithTranslation} from 'react-i18next';
import {RouteComponentProps, withRouter} from 'react-router';
import DigitInput from '../../components/digitinput/DigitInput';
import LogoSerge from 'src/components/logoserge/LogoSerge';
import {ReduxAppState} from '../../store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {isAuthentifcated} from 'src/store/root/actions';
import {RootActionTypes} from 'src/store/root/types';

import './Login.css';
import lockImg from './LOCK.png';
import lockImg2x from './LOCK@2x.png';
import unlockImg from './UNLOCK THE SECRET.png';
import unlockImg2x from './UNLOCK THE SECRET@2x.png';
import Main from '../main/Main';

// const validcode = {
//   '29547': 'EN',
//   '27683': 'FR',
//   '37294': 'EN',
//   '36842': 'EN',
//   '46273': 'ES',
//   '43582': 'EN',
//   '59376': 'EN',
//   '52843': 'EN',
//   '64823': 'EN',
//   '63598': 'FR',
//   '78569': 'EN',
//   '72495': 'EN',
//   '83296': 'EN',
//   '86572': 'EN',
//   '95426': 'EN',
//   '92857': 'EN',
//   '97364': 'EN',
//   '25894': 'FR',
// };
import validcode from 'src/utils/logincode';

type StateProps = {
  hasValidateAuthentification: boolean;
};

type DispatchProps = {
  isAuthentifcated: (code: string) => RootActionTypes;
};

type Prop = WithTranslation & RouteComponentProps & StateProps & DispatchProps;
type State = {
  value: string;
  loaded: boolean;
  code_entered: boolean;
  pre_load_over: boolean;
  is_auth: boolean;
};

class Login extends React.Component<Prop, State> {
  constructor(prop: Prop) {
    super(prop);
    this.state = {
      value: '',
      loaded: false,
      code_entered: false,
      pre_load_over: false,
      is_auth: false,
    };
    // if (this.props.hasValidateAuthentification) {
    //   //   this.props.history.push({pathname: 'main'});
    //   alert('IS AUTH');
    // } else alert('not auth');
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    this.setState({loaded: true});
  };

  _onChange = (value: string) => {
    this.setState({value});
    if (Object.keys(validcode).includes(value)) {
      this.setState({value});
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.props.i18n.changeLanguage(validcode[value].lang.toLowerCase());
      this.props.isAuthentifcated(value);
      this.setState({code_entered: true});
      localStorage.setItem('is_auth', JSON.stringify(true));
      this.setState({is_auth: true});
    }
  };

  loadPage = () => {
    // this.props.history.push({pathname: 'main'});
    this.setState({pre_load_over: true});
  };

  // Clears text selection
  //   clearSelection = () => {
  //     if (!window) {
  //     } else {
  //       if (window.getSelection) {
  //         window.getSelection().removeAllRanges();
  //       }
  //     }
  //   };

  render(): JSX.Element {
    // Page load check for login
    if (document.readyState === 'complete' && this.state.loaded != true) {
      console.log('LOAD CHECK ENTERED');
      this.setState({loaded: true});
    }

    const zoom_anim = this.state.code_entered ? ' zoom-anim' : '';
    const fade_out = this.state.code_entered ? ' fade-out' : '';
    const loaded_fade_in = this.state.loaded ? ' fade-in-rest' : 'no-opacity';
    const fade_in_lock = this.state.loaded ? ' fade-in-lock ' : ' ';
    const no_opacity = this.state.code_entered ? ' ' : ' no-opacity ';
    const logo_fade = this.state.loaded && !this.state.code_entered ? ' fade-in-logo' : '';
    const is_auth = localStorage.getItem('is_auth') === null ? false : true;

    if (this.state.code_entered) setTimeout(this.loadPage, 4800);
    const {t} = this.props;
    const {value} = this.state;

    // Login page
    const login_page = (
      <div className="login">
        <LogoSerge className={`logo no-opacity ${logo_fade}  ${fade_out}  `} />
        <div className="center">
          <div className={`lock ${zoom_anim}`} id="lock-container">
            <img
              id="lock"
              className={`lock  ${fade_in_lock}  ${no_opacity}  `}
              //   className={this.state.loaded ? 'lock fade-in-lock' : 'lock no-opacity'}
              src={lockImg}
              srcSet={lockImg2x}
            />
          </div>
          <div className={`lock no-select unlockgroup ${fade_out} ${loaded_fade_in}  `}>
            <img className="unlock" src={unlockImg} srcSet={unlockImg2x} />
          </div>
          <div className={`form enter-code no-select ${fade_out} ${loaded_fade_in}  `}>
            {/* 29547 */}
            {/* {t('login.enter')} */}
            <p className="enter no-select">{t('login.enter')}</p>
            <DigitInput code_entered={this.state.code_entered} value={value} onChange={this._onChange} />
          </div>

          {/* {t('login.hashtag')} */}
          <p className={`hashtag ${fade_out} ${loaded_fade_in}  `}>{t('login.hashtag')}</p>
        </div>
      </div>
    );

    // alert(JSON.stringify(ReactReduxContext));
    // const page_to_show = this.getPage();
    // if (JSON.parse(localStorage.getItem('is_auth')) === true) page_to_show = <p></p>;
    // If user already entered a valid code => Show main else show login page
    // const page_;
    // If code entered is valid => show main else show login page
    // const page_to_show = this.state.pre_load_over === true ? <Main></Main> : login_page;

    if (is_auth && this.state.code_entered === false) {
      return <Main fade_anim={false}></Main>;
    } else if (is_auth === true && this.state.code_entered === true && this.state.pre_load_over === true) {
      //   alert('launching with auth and code');
      return <Main fade_anim={true}></Main>;
    } else {
      return login_page;
    }
    // <div className="login">
    //   <LogoSerge className={`logo no-opacity ${logo_fade}  ${fade_out}  `} />
    //   <div className="center">
    //     <div className={`lock ${zoom_anim}`} id="lock-container">
    //       <img
    //         id="lock"
    //         className={`lock  ${fade_in_lock}  ${no_opacity}  `}
    //         //   className={this.state.loaded ? 'lock fade-in-lock' : 'lock no-opacity'}
    //         src={lockImg}
    //         srcSet={lockImg2x}
    //       />
    //     </div>
    //     <div className={`lock no-select unlockgroup ${fade_out} ${loaded_fade_in}  `}>
    //       <img className="unlock" src={unlockImg} srcSet={unlockImg2x} />
    //     </div>
    //     <div className={`form enter-code no-select ${fade_out} ${loaded_fade_in}  `}>
    //       {/* 29547 */}
    //       {/* {t('login.enter')} */}
    //       <p className="enter no-select">ENTER THE CODE</p>
    //       <DigitInput code_entered={this.state.code_entered} value={value} onChange={this._onChange} />
    //     </div>
    //     {/* {t('login.hashtag')} */}
    //     <p className={`hashtag ${fade_out} ${loaded_fade_in}  `}>#LADOMPTEUSEENCAGEE</p>
    //   </div>
    // </div>
  }
}

const mapStateToProps = (state: ReduxAppState): StateProps => {
  return {
    hasValidateAuthentification: state.hasValidateAuthentification,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    isAuthentifcated: (code: string) => dispatch(isAuthentifcated(code)),
  };
};

export default connect<StateProps, DispatchProps, unknown, ReduxAppState>(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(withRouter(Login)));
