/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ModalParfum from '../modalparfum/ModalParfum';

import './BarNavigation.css';

import arrowDown from '../../assets/img/Arrow_down.png';
import arrowDown2x from '../../assets/img/Arrow_down@2x.png';

import fioleVerreFumee from '../../assets/img/Fiole.png';
import fioleSilhouetteTransparente from '../../assets/img/Fiole_Silhouette_transparente.png';

import fioleFilsJoie from '../../assets/img/Fiole_Fils_De_Joie.png';
import fioleFilsJoie2x from '../../assets/img/Fiole_Fils_De_Joie@2x.png';
import imageFilsJoie from '../../assets/img/Fils_De_joie.jpg';
import imageFilsJoie2x from '../../assets/img/Fils_De_joie@2x.png';
import fumeeFilsJoie from '../../assets/img/Fumee_Fils_de_joie.png';

import fioleFilleBerlin from '../../assets/img/Fiole_Fille_De_Berlin.png';
import fioleFilleBerlin2x from '../../assets/img/Fiole_Fille_De_Berlin@2x.png';
import imageFilleBerlin from '../../assets/img/La_Fille_De_Berlin.jpg';
import imageFilleBerlin2x from '../../assets/img/La_Fille_De_Berlin@2x.png';
import fumeeBerlin from '../../assets/img/Fumee_La_fille_de_Berlin.png';

import fioleAmbre from '../../assets/img/Fiole_Ambre_Sultan.png';
import fioleAmbre2x from '../../assets/img/Fiole_Ambre_Sultan@2x.png';
import imageAmbre from '../../assets/img/Ambre_Sultan.jpg';
import imageAmbre2x from '../../assets/img/Ambre_Sultan@2x.png';
import fumeeAmbre from '../../assets/img/Fumee_Ambre_sultan.png';

import fioleFleurDoranger from '../../assets/img/Fiole_Fleur_Doranger.png';
import fioleFleurDoranger2x from '../../assets/img/Fiole_Fleur_Doranger@2x.png';
import imageFleurDoranger from '../../assets/img/Fleurs_d_Oranger.jpg';
import imageFleurDoranger2x from '../../assets/img/Fleurs_d_Oranger@2x.png';
import fumeeFleurOranger from '../../assets/img/Fumee_Fleurs_doranger.png';

import fioleBoisVanille from '../../assets/img/Fiole_Un_Bois_Vanille.png';
import fioleBoisVanille2x from '../../assets/img/Fiole_Un_Bois_Vanille@2x.png';
import imageBoisVanille from '../../assets/img/Un_Bois_Vanille.jpg';
import imageBoisVanille2x from '../../assets/img/Un_Bois_Vanille@2x.png';
import fumeeBoisVanille from '../../assets/img/Fumee_Un_bois_vanille.png';

import fioleNuitCellophane from '../../assets/img/Fiole_Nuit_De_Cellophane.png';
import fioleNuitCellophane2x from '../../assets/img/Fiole_Nuit_De_Cellophane@2x.png';
import imageNuitCellophane from '../../assets/img/Nuit_De_Cellophane.jpg';
import imageNuitCellophane2x from '../../assets/img/Nuit_De_Cellophane@2x.png';
import fumeeNuitCellophane from '../../assets/img/Fumee_Nuit_de_cellophane.png';

import fioleFeminite from '../../assets/img/Fiole_Feminite_Du_Bois.png';
import fioleFeminite2x from '../../assets/img/Fiole_Feminite_Du_Bois@2x.png';
import imageFeminite from '../../assets/img/Feminite_Du_Bois.jpg';
import imageFeminite2x from '../../assets/img/Feminite_Du_Bois@2x.png';
import fumeeFeminite from '../../assets/img/Fumee_Feminite_du_bois.png';

import fioleLorpheline from '../../assets/img/Fiole_Lorpheline.png';
import fioleLorpheline2x from '../../assets/img/Fiole_Lorpheline@2x.png';
import imageLorpheline from '../../assets/img/L_orpheline.jpg';
import imageLorpheline2x from '../../assets/img/L_orpheline@2x.png';
import fumeeLOrpheline from '../../assets/img/Fumee_Lorpheline.png';

type Props = {
  onShare: any;
} & WithTranslation;

function BarNavigation(props: Props): JSX.Element {
  const {t} = props;
  const [active, setActive] = useState('');
  const [modalActive, setModalActive] = useState('');

  //   Vials anims
  const [vial1Anim, setVial1Anim] = useState(false);
  const [vial2Anim, setVial2Anim] = useState(false);
  const [vial3Anim, setVial3Anim] = useState(false);
  const [vial4Anim, setVial4Anim] = useState(false);
  const [vial5Anim, setVial5Anim] = useState(false);
  const [vial6Anim, setVial6Anim] = useState(false);
  const [vial7Anim, setVial7Anim] = useState(false);
  const [vial8Anim, setVial8Anim] = useState(false);

  //   Vials full
  const [vial1Full, setVial1Full] = useState(false);
  const [vial2Full, setVial2Full] = useState(false);
  const [vial3Full, setVial3Full] = useState(false);
  const [vial4Full, setVial4Full] = useState(false);
  const [vial5Full, setVial5Full] = useState(false);
  const [vial6Full, setVial6Full] = useState(false);
  const [vial7Full, setVial7Full] = useState(false);
  const [vial8Full, setVial8Full] = useState(false);
  const [vialsFull, setVialFull] = useState(false);

  // Smoke opacity class
  const smoke_1 = active === '1' ? ' smoke-in ' : ' ';
  const smoke_2 = active === '2' ? ' smoke-in ' : ' ';
  const smoke_3 = active === '3' ? ' smoke-in ' : ' ';
  const smoke_4 = active === '4' ? ' smoke-in ' : ' ';
  const smoke_5 = active === '5' ? ' smoke-in ' : ' ';
  const smoke_6 = active === '6' ? ' smoke-in ' : ' ';
  const smoke_7 = active === '7' ? ' smoke-in ' : ' ';
  const smoke_8 = active === '8' ? ' smoke-in ' : ' ';

  //   Vials empty rotate anim classes
  const vial1_empty_anim = vial1Anim === false ? ' ' : ' vial-empty-anim ';
  const vial2_empty_anim = vial2Anim === false ? ' ' : ' vial-empty-anim-counter-clockwise ';
  const vial3_empty_anim = vial3Anim === false ? ' ' : ' vial-empty-anim ';
  const vial4_empty_anim = vial4Anim === false ? ' ' : ' vial-empty-anim-counter-clockwise ';
  const vial5_empty_anim = vial5Anim === false ? ' ' : ' vial-empty-anim ';
  const vial6_empty_anim = vial6Anim === false ? ' ' : ' vial-empty-anim ';
  const vial7_empty_anim = vial7Anim === false ? ' ' : ' vial-empty-anim-counter-clockwise ';
  const vial8_empty_anim = vial8Anim === false ? ' ' : ' vial-empty-anim ';
  const vials_full_anim = vialsFull === false ? ' ' : ' thinner-vials-container ';

  const anim_time = 3000;
  //   Individually fill 2sec after hover (anim end)
  if (vial1Anim)
    setTimeout(function () {
      setVial1Full(true);
    }, anim_time);

  if (vial2Anim)
    setTimeout(function () {
      setVial2Full(true);
    }, anim_time);

  if (vial3Anim)
    setTimeout(function () {
      setVial3Full(true);
    }, anim_time);

  if (vial4Anim)
    setTimeout(function () {
      setVial4Full(true);
    }, anim_time);

  if (vial5Anim)
    setTimeout(function () {
      setVial5Full(true);
    }, anim_time);

  if (vial6Anim)
    setTimeout(function () {
      setVial6Full(true);
    }, anim_time);

  if (vial7Anim)
    setTimeout(function () {
      setVial7Full(true);
    }, anim_time);

  if (vial8Anim)
    setTimeout(function () {
      setVial8Full(true);
    }, anim_time);

  // If all animations have been triggered wait for time needed to complete then set them as completed
  if (vial1Anim && vial2Anim && vial3Anim && vial4Anim && vial5Anim && vial6Anim && vial7Anim && vial8Anim) {
    setTimeout(function () {
      setVialFull(true);
    }, anim_time * 1.5);
  }

  //   Classnames changes triggering going from empty to full vial
  const inv_to_visible1 = vial1Full === false ? ' ' : ' fade-in ';
  const visible_to_inv1 = vial1Full === false ? ' ' : ' fade-out ';

  const inv_to_visible2 = vial2Full === false ? ' ' : ' fade-in ';
  const visible_to_inv2 = vial2Full === false ? ' ' : ' fade-out ';

  const inv_to_visible3 = vial3Full === false ? ' ' : ' fade-in ';
  const visible_to_inv3 = vial3Full === false ? ' ' : ' fade-out ';

  const inv_to_visible4 = vial4Full === false ? ' ' : ' fade-in ';
  const visible_to_inv4 = vial4Full === false ? ' ' : ' fade-out ';

  const inv_to_visible5 = vial5Full === false ? ' ' : ' fade-in ';
  const visible_to_inv5 = vial5Full === false ? ' ' : ' fade-out ';

  const inv_to_visible6 = vial6Full === false ? ' ' : ' fade-in ';
  const visible_to_inv6 = vial6Full === false ? ' ' : ' fade-out ';

  const inv_to_visible7 = vial7Full === false ? ' ' : ' fade-in ';
  const visible_to_inv7 = vial7Full === false ? ' ' : ' fade-out ';

  const inv_to_visible8 = vial8Full === false ? ' ' : ' fade-in ';
  const visible_to_inv8 = vial8Full === false ? ' ' : ' fade-out ';

  //   ClassNames going from visible to invisible (or reverse)
  // const inv_to_visible = vialsFull === false ? ' ' : ' fade-in ';
  // const visible_to_inv = vialsFull === false ? ' ' : ' fade-out ';

  return (
    <div className="bar-navigation-container">
      <ul className={`bar-navigation ${vials_full_anim}`}>
        <li
          className={active === '1' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('1');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_1}`} src={fumeeFilsJoie}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />
            <img
              onMouseEnter={() => {
                setVial1Anim(true);
              }}
              className={`clickable vial vial-empty-1 ${vial1_empty_anim} ${visible_to_inv1}`}
              src={fioleVerreFumee}
            />
            <img
              //   className="clickable vial vial-full"
              className={`clickable vial vial-full ${inv_to_visible1}`}
              src={fioleFilsJoie}
              srcSet={fioleFilsJoie2x}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.filsdejoie.title')}</h2>
            <p>{t('fiole.filsdejoie.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '1'}
              image={imageFilsJoie}
              image2x={imageFilsJoie2x}
              title={t('fiole.filsdejoie.title')}
              content={t('fiole.filsdejoie.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('1')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '2' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('2');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_2}`} src={fumeeBerlin}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />
            <img
              className={`clickable vial vial-full ${inv_to_visible2}`}
              //   className="clickable vial-full"
              src={fioleFilleBerlin}
              srcSet={fioleFilleBerlin2x}
            />
            <img
              //   className="clickable vial vial-empty"
              onMouseEnter={() => {
                setVial2Anim(true);
              }}
              className={`clickable vial vial-empty-2 ${vial2_empty_anim} ${visible_to_inv2}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.filleberlin.title')}</h2>
            <p>{t('fiole.filleberlin.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '2'}
              image={imageFilleBerlin}
              image2x={imageFilleBerlin2x}
              title={t('fiole.filleberlin.title')}
              content={t('fiole.filleberlin.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('2')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '3' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('3');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_3}`} src={fumeeAmbre}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />

            <img className={`clickable vial vial-full ${inv_to_visible3}`} src={fioleAmbre} srcSet={fioleAmbre2x} />
            <img
              onMouseEnter={() => {
                setVial3Anim(true);
              }}
              className={`clickable vial vial-empty-3 ${vial3_empty_anim} ${visible_to_inv3}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.ambre.title')}</h2>
            <p>{t('fiole.ambre.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '3'}
              image={imageAmbre}
              image2x={imageAmbre2x}
              title={t('fiole.ambre.title')}
              content={t('fiole.ambre.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('3')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '4' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('4');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_4}`} src={fumeeFleurOranger}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />

            <img
              className={`clickable vial vial-full ${inv_to_visible4}`}
              src={fioleFleurDoranger}
              srcSet={fioleFleurDoranger2x}
            />
            <img
              onMouseEnter={() => {
                setVial4Anim(true);
              }}
              className={`clickable vial vial-empty-4 ${vial4_empty_anim} ${visible_to_inv4}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.fleursdoranger.title')}</h2>
            <p>{t('fiole.fleursdoranger.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '4'}
              image={imageFleurDoranger}
              image2x={imageFleurDoranger2x}
              title={t('fiole.fleursdoranger.title')}
              content={t('fiole.fleursdoranger.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('4')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '5' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('5');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_5}`} src={fumeeBoisVanille}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />

            <img
              className={`clickable vial vial-full ${inv_to_visible5}`}
              src={fioleBoisVanille}
              srcSet={fioleBoisVanille2x}
            />
            <img
              onMouseEnter={() => {
                setVial5Anim(true);
              }}
              className={`clickable vial vial-empty-5 ${vial5_empty_anim} ${visible_to_inv5}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.boisvanille.title')}</h2>
            <p>{t('fiole.boisvanille.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '5'}
              image={imageBoisVanille}
              image2x={imageBoisVanille2x}
              title={t('fiole.boisvanille.title')}
              content={t('fiole.boisvanille.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('5')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '6' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('6');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_6}`} src={fumeeNuitCellophane}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />
            <img
              className={`clickable vial vial-full ${inv_to_visible6}`}
              src={fioleNuitCellophane}
              srcSet={fioleNuitCellophane2x}
            />
            <img
              onMouseEnter={() => {
                setVial6Anim(true);
              }}
              className={`clickable vial vial-empty-6 ${vial6_empty_anim} ${visible_to_inv6}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.nuitcellophane.title')}</h2>
            <p>{t('fiole.nuitcellophane.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '6'}
              image={imageNuitCellophane}
              image2x={imageNuitCellophane2x}
              title={t('fiole.nuitcellophane.title')}
              content={t('fiole.nuitcellophane.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('6')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '7' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('7');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_7}`} src={fumeeFeminite}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />
            <img
              className={`clickable vial vial-full ${inv_to_visible7}`}
              src={fioleFeminite}
              srcSet={fioleFeminite2x}
            />
            <img
              onMouseEnter={() => {
                setVial7Anim(true);
              }}
              className={`clickable vial vial-empty-7 ${vial7_empty_anim} ${visible_to_inv7}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.feminitebois.title')}</h2>
            <p>{t('fiole.feminitebois.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '7'}
              image={imageFeminite}
              image2x={imageFeminite2x}
              title={t('fiole.feminitebois.title')}
              content={t('fiole.feminitebois.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('7')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
        <li
          className={active === '8' ? 'active' : ''}
          onClick={() => {
            if (vialsFull) setActive('8');
          }}>
          <div className="section-title">
            {/* FIOLE CHAANGEE */}
            <img className={`smoke-opacity ${smoke_8}`} src={fumeeLOrpheline}></img>
            <img className="clickable vial vial-silhouette" src={fioleSilhouetteTransparente} />
            <img
              className={`clickable vial vial-full ${inv_to_visible8}`}
              src={fioleLorpheline}
              srcSet={fioleLorpheline2x}
            />
            <img
              onMouseEnter={() => {
                setVial8Anim(true);
              }}
              className={`clickable vial vial-empty-8 ${vial8_empty_anim} ${visible_to_inv8}`}
              src={fioleVerreFumee}
            />
          </div>
          <div className="section-content">
            <h2>{t('fiole.lorpheline.title')}</h2>
            <p>{t('fiole.lorpheline.detail')}</p>
            <p>Serge Lutens</p>
            <ModalParfum
              isOpen={modalActive === '8'}
              image={imageLorpheline}
              image2x={imageLorpheline2x}
              title={t('fiole.lorpheline.title')}
              content={t('fiole.lorpheline.content')}
              onClose={() => setModalActive('')}
            />
            <Button variant="outline-light" onClick={() => setModalActive('8')}>
              {t('fiole.decouvrir')}
            </Button>
          </div>
        </li>
      </ul>
      <div className="bar-navigation-action">
        <Button variant="outline-light" onClick={props.onShare}>
          {t('fiole.partager')}
        </Button>
        <img className="arrow-down" src={arrowDown} srcSet={arrowDown2x} />
      </div>
    </div>
  );
}

// function BarNavigation(props: Props): JSX.Element {
//   const {t} = props;
//   const [active, setActive] = useState('');
//   const [modalActive, setModalActive] = useState('');
//   return (
//     <ul className="bar-navigation">
//       <li className={active === '1' ? 'active' : ''} onClick={() => setActive('1')}>
//         <div className="section-title">
//           {/* FIOLE 1 CHAANGEE */}
//           {/* <img className="clickable" src={fioleVerreFumee} /> */}
//           <img className="clickable" src={fioleFilsJoie} srcSet={fioleFilsJoie2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.filsdejoie.title')}</h2>
//           <p>{t('fiole.filsdejoie.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '1'}
//             image={imageFilsJoie}
//             image2x={imageFilsJoie2x}
//             title={t('fiole.filsdejoie.title')}
//             content={t('fiole.filsdejoie.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('1')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '2' ? 'active' : ''} onClick={() => setActive('2')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleFilleBerlin} srcSet={fioleFilleBerlin2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.filleberlin.title')}</h2>
//           <p>{t('fiole.filleberlin.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '2'}
//             image={imageFilleBerlin}
//             image2x={imageFilleBerlin2x}
//             title={t('fiole.filleberlin.title')}
//             content={t('fiole.filleberlin.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('2')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '3' ? 'active' : ''} onClick={() => setActive('3')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleAmbre} srcSet={fioleAmbre2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.ambre.title')}</h2>
//           <p>{t('fiole.ambre.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '3'}
//             image={imageAmbre}
//             image2x={imageAmbre2x}
//             title={t('fiole.ambre.title')}
//             content={t('fiole.ambre.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('3')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '4' ? 'active' : ''} onClick={() => setActive('4')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleFleurDoranger} srcSet={fioleFleurDoranger2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.fleursdoranger.title')}</h2>
//           <p>{t('fiole.fleursdoranger.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '4'}
//             image={imageFleurDoranger}
//             image2x={imageFleurDoranger2x}
//             title={t('fiole.fleursdoranger.title')}
//             content={t('fiole.fleursdoranger.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('4')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '5' ? 'active' : ''} onClick={() => setActive('5')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleBoisVanille} srcSet={fioleBoisVanille2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.boisvanille.title')}</h2>
//           <p>{t('fiole.boisvanille.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '5'}
//             image={imageBoisVanille}
//             image2x={imageBoisVanille2x}
//             title={t('fiole.boisvanille.title')}
//             content={t('fiole.boisvanille.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('5')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '6' ? 'active' : ''} onClick={() => setActive('6')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleNuitCellophane} srcSet={fioleNuitCellophane2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.nuitcellophane.title')}</h2>
//           <p>{t('fiole.nuitcellophane.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '6'}
//             image={imageNuitCellophane}
//             image2x={imageNuitCellophane2x}
//             title={t('fiole.nuitcellophane.title')}
//             content={t('fiole.nuitcellophane.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('6')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '7' ? 'active' : ''} onClick={() => setActive('7')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleFeminite} srcSet={fioleFeminite2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.feminitebois.title')}</h2>
//           <p>{t('fiole.feminitebois.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '7'}
//             image={imageFeminite}
//             image2x={imageFeminite2x}
//             title={t('fiole.feminitebois.title')}
//             content={t('fiole.feminitebois.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('7')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <li className={active === '8' ? 'active' : ''} onClick={() => setActive('8')}>
//         <div className="section-title">
//           <img className="clickable" src={fioleLorpheline} srcSet={fioleLorpheline2x} />
//         </div>
//         <div className="section-content">
//           <h2>{t('fiole.lorpheline.title')}</h2>
//           <p>{t('fiole.lorpheline.detail')}</p>
//           <p>Serge Lutens</p>
//           <ModalParfum
//             isOpen={modalActive === '8'}
//             image={imageLorpheline}
//             image2x={imageLorpheline2x}
//             title={t('fiole.lorpheline.title')}
//             content={t('fiole.lorpheline.content')}
//             onClose={() => setModalActive('')}
//           />
//           <Button variant="outline-light" onClick={() => setModalActive('8')}>
//             {t('fiole.decouvrir')}
//           </Button>
//         </div>
//       </li>
//       <div className="bar-navigation-action">
//         <img className="arrow-down" src={arrowDown} srcSet={arrowDown2x} />
//         <Button onClick={props.goHome} className="homepage" variant="outline-light">
//           {t('fiole.homepage')} &gt;
//         </Button>
//       </div>
//     </ul>
//   );
// }

export default withTranslation()(BarNavigation);
