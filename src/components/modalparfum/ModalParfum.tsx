import React from 'react';
import Modal from 'react-modal';
import SimpleBar from 'simplebar-react';
import {isMobile} from 'mobile-device-detect';

import 'simplebar/dist/simplebar.min.css';
import './ModalParfum.css';

import backgroundTile from '../../assets/img/background-tile.png';
import closeBtn from '../../assets/img/button_close.png';
import closeBtn2x from '../../assets/img/button_close@2x.png';

Modal.setAppElement('#root');

const styles: Modal.Styles = {
  overlay: {
    zIndex: 10,
    backgroundRepeat: 'repeat',
    backgroundImage: 'url(' + backgroundTile + ')',
  },
  content: {
    border: 'none',
    padding: 0,
    backgroundColor: 'black',
    overflowY: 'scroll',
    width: isMobile ? 'fit-content' : '',
    top: 30,
    bottom: 30,
    left: 20,
    right: 20,
  },
};

type Props = {
  isOpen: boolean;
  image: string;
  image2x?: string;
  title: string;
  content: string;
  onClose?: () => void;
};

function ModalParfum(props: Props): JSX.Element {
  const {isOpen, image, title, content, image2x, onClose} = props;
  return (
    <Modal isOpen={isOpen} style={styles}>
      <div className="modal-parfum">
        <img className="img-desktop" src={image} srcSet={image2x} />
        <div className="content">
          <h2>{title}</h2>
          <img className="img-mobile" src={image} srcSet={image2x} />
          {isMobile ? (
            <div className="parfum-description">
              {content}
              <p style={{marginTop: 10}}>Serge Lutens</p>
            </div>
          ) : (
            <SimpleBar style={{maxHeight: 300, padding: 5, fontSize: 18, textAlign: 'justify', paddingRight: 10}}>
              {content}
              <p style={{marginTop: 10}}>Serge Lutens</p>
            </SimpleBar>
          )}
        </div>
        <div className="close-btn">
          <img src={closeBtn} srcSet={closeBtn2x} onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
}

export default ModalParfum;
