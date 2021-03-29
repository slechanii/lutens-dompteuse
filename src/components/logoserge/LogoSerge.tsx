import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import sergeLogo from './Logo_Header_Serge_Lutens.png';
import sergeLogo2x from './Logo_Header_Serge_Lutens@2x.png';
import './LogoSerge.css';

type Props = {
  className?: string;
} & RouteComponentProps;

function LogoSerge(props: Props): JSX.Element {
  return (
    <img
      className={`logo-serge ${props.className ?? ''}`}
      src={sergeLogo}
      srcSet={sergeLogo2x}
      /*onClick={() => props.history.push({pathname: 'main'})}*/
    />
  );
}

export default withRouter(LogoSerge);
