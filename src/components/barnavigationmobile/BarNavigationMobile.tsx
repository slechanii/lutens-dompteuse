/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';
import ModalParfum from '../modalparfum/ModalParfum';
import {Button} from 'react-bootstrap';

import './BarNavigationMobile.css';

import arrowDown from '../../assets/img/Arrow_down.png';
import arrowDown2x from '../../assets/img/Arrow_down@2x.png';

import fioleFilsJoie from '../../assets/img/Fiole_Fils_De_Joie.png';
import fioleFilsJoie2x from '../../assets/img/Fiole_Fils_De_Joie@2x.png';
import imageFilsJoie from '../../assets/img/Fils_De_joie.jpg';
import imageFilsJoie2x from '../../assets/img/Fils_De_joie@2x.png';

import fioleFilleBerlin from '../../assets/img/Fiole_Fille_De_Berlin.png';
import fioleFilleBerlin2x from '../../assets/img/Fiole_Fille_De_Berlin@2x.png';
import imageFilleBerlin from '../../assets/img/La_Fille_De_Berlin.jpg';
import imageFilleBerlin2x from '../../assets/img/La_Fille_De_Berlin@2x.png';

import fioleAmbre from '../../assets/img/Fiole_Ambre_Sultan.png';
import fioleAmbre2x from '../../assets/img/Fiole_Ambre_Sultan@2x.png';
import imageAmbre from '../../assets/img/Ambre_Sultan.jpg';
import imageAmbre2x from '../../assets/img/Ambre_Sultan@2x.png';

import fioleFleurDoranger from '../../assets/img/Fiole_Fleur_Doranger.png';
import fioleFleurDoranger2x from '../../assets/img/Fiole_Fleur_Doranger@2x.png';
import imageFleurDoranger from '../../assets/img/Fleurs_d_Oranger.jpg';
import imageFleurDoranger2x from '../../assets/img/Fleurs_d_Oranger@2x.png';

import fioleBoisVanille from '../../assets/img/Fiole_Un_Bois_Vanille.png';
import fioleBoisVanille2x from '../../assets/img/Fiole_Un_Bois_Vanille@2x.png';
import imageBoisVanille from '../../assets/img/Un_Bois_Vanille.jpg';
import imageBoisVanille2x from '../../assets/img/Un_Bois_Vanille@2x.png';

import fioleNuitCellophane from '../../assets/img/Fiole_Nuit_De_Cellophane.png';
import fioleNuitCellophane2x from '../../assets/img/Fiole_Nuit_De_Cellophane@2x.png';
import imageNuitCellophane from '../../assets/img/Nuit_De_Cellophane.jpg';
import imageNuitCellophane2x from '../../assets/img/Nuit_De_Cellophane@2x.png';

import fioleFeminite from '../../assets/img/Fiole_Feminite_Du_Bois.png';
import fioleFeminite2x from '../../assets/img/Fiole_Feminite_Du_Bois@2x.png';
import imageFeminite from '../../assets/img/Feminite_Du_Bois.jpg';
import imageFeminite2x from '../../assets/img/Feminite_Du_Bois@2x.png';

import fioleLorpheline from '../../assets/img/Fiole_Lorpheline.png';
import fioleLorpheline2x from '../../assets/img/Fiole_Lorpheline@2x.png';
import imageLorpheline from '../../assets/img/L_orpheline.jpg';
import imageLorpheline2x from '../../assets/img/L_orpheline@2x.png';

type Props = {
  onShare: any;
} & WithTranslation;

function BarNavigationMobile(props: Props): JSX.Element {
  const {t} = props;
  const [active, setActive] = useState('');
  const [modalActive, setModalActive] = useState('');
  return (
    <div className="bar-navigation-container">
      <div className="bar-navigation">
        <div className={active === '1' ? 'active item' : 'item'} onClick={() => setActive('1')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('1')}>
            <img src={fioleFilsJoie} srcSet={fioleFilsJoie2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '1'}
            image={imageFilsJoie}
            image2x={imageFilsJoie2x}
            title={t('fiole.filsdejoie.title')}
            content={t('fiole.filsdejoie.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '2' ? 'active item' : 'item'} onClick={() => setActive('2')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('2')}>
            <img src={fioleFilleBerlin} srcSet={fioleFilleBerlin2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '2'}
            image={imageFilleBerlin}
            image2x={imageFilleBerlin2x}
            title={t('fiole.filleberlin.title')}
            content={t('fiole.filleberlin.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '3' ? 'active item' : 'item'} onClick={() => setActive('3')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('3')}>
            <img src={fioleAmbre} srcSet={fioleAmbre2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '3'}
            image={imageAmbre}
            image2x={imageAmbre2x}
            title={t('fiole.ambre.title')}
            content={t('fiole.ambre.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '4' ? 'active item' : 'item'} onClick={() => setActive('4')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('4')}>
            <img src={fioleFleurDoranger} srcSet={fioleFleurDoranger2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '4'}
            image={imageFleurDoranger}
            image2x={imageFleurDoranger2x}
            title={t('fiole.fleursdoranger.title')}
            content={t('fiole.fleursdoranger.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '5' ? 'active item' : 'item'} onClick={() => setActive('5')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('5')}>
            <img src={fioleBoisVanille} srcSet={fioleBoisVanille2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '5'}
            image={imageBoisVanille}
            image2x={imageBoisVanille2x}
            title={t('fiole.boisvanille.title')}
            content={t('fiole.boisvanille.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '6' ? 'active item' : 'item'} onClick={() => setActive('6')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('6')}>
            <img src={fioleNuitCellophane} srcSet={fioleNuitCellophane2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '6'}
            image={imageNuitCellophane}
            image2x={imageNuitCellophane2x}
            title={t('fiole.nuitcellophane.title')}
            content={t('fiole.nuitcellophane.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '7' ? 'active item' : 'item'} onClick={() => setActive('7')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('7')}>
            <img src={fioleFeminite} srcSet={fioleFeminite2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '7'}
            image={imageFeminite}
            image2x={imageFeminite2x}
            title={t('fiole.feminitebois.title')}
            content={t('fiole.feminitebois.content')}
            onClose={() => setModalActive('')}
          />
        </div>
        <div className={active === '8' ? 'active item' : 'item'} onClick={() => setActive('8')}>
          <Button variant="outline- border-none" onClick={() => setModalActive('8')}>
            <img src={fioleLorpheline} srcSet={fioleLorpheline2x} />
          </Button>
          <ModalParfum
            isOpen={modalActive === '8'}
            image={imageLorpheline}
            image2x={imageLorpheline2x}
            title={t('fiole.lorpheline.title')}
            content={t('fiole.lorpheline.content')}
            onClose={() => setModalActive('')}
          />
        </div>
      </div>
      <div className="bar-navigation-action">
        <Button variant="outline-light" onClick={props.onShare}>
          {t('fiole.partager')}
        </Button>
        <img className="arrow-down" src={arrowDown} srcSet={arrowDown2x} />
      </div>
    </div>
  );
}

export default withTranslation()(BarNavigationMobile);
