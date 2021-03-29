import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomepageButton.css';
import {WithTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router-dom';

type StateProps = {
  className?: string;
};

type Props = WithTranslation & RouteComponentProps & StateProps;

function HomepageButton(props: Props): JSX.Element {
  const {t, history} = props;
  return (
    <Button
      onClick={() => {
        history.push('main');
      }}
      className={`homepageButton ${props.className ?? ''}`}
      variant="outline-light">
      {t('fiole.homepage')} &gt;
    </Button>
  );
}

export default HomepageButton;
