import React from 'react';
import LanguageSelector from '../languageselector/LanguageSelector';
import LogoSerge from '../logoserge/LogoSerge';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import './Header.css';

import logoHeader from './Logo_Header_Unlock.png';
import logoHeader2x from './Logo_Header_Unlock@2x.png';

function Header(props: RouteComponentProps): JSX.Element {
  return (
    <div className="header">
      <div className="left">
        <LogoSerge />
      </div>
      <div className="logounlock" onClick={() => props.history.push({pathname: 'main'})}>
        <img src={logoHeader} srcSet={logoHeader2x} />
      </div>
      <div className="right">
        <LanguageSelector />
      </div>
    </div>
  );
}

export default withRouter(Header);
