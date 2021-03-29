import React, {useState} from 'react';
import Modal from 'react-modal';

import './ModalChecklist.css';

import backgroundTile from '../../assets/img/background-tile.png';
import closeBtn from '../../assets/img/button_close.png';
import closeBtn2x from '../../assets/img/button_close@2x.png';
import {WithTranslation, withTranslation} from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {RootActionTypes} from '../../store/root/types';
import {ReduxAppState} from '../../store';
import {createVote, Vote} from '../../store/root/actions';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

Modal.setAppElement('#root');

const styles: Modal.Styles = {
  overlay: {
    zIndex: 10,
    background: 'none',
    backgroundRepeat: 'repeat',
    backgroundImage: 'url(' + backgroundTile + ')',
  },
  content: {
    border: 'none',
    padding: 50,
    backgroundColor: 'black',
    top: 30,
    bottom: 30,
    left: 20,
    right: 20,
  },
};

type OwnProps = {
  isOpen: boolean;
  onClose?: () => void;
};

type StateProps = {
  hasVoted: boolean;
  code: string;
};
type DispatchProps = {
  createVote: (vote: Vote) => Promise<RootActionTypes>;
};

type Props = OwnProps & StateProps & DispatchProps & WithTranslation;

function ModalChecklist(props: Props): JSX.Element {
  const [question1, setQuestion1] = useState<boolean | undefined>(undefined);
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState<boolean | undefined>(undefined);
  const [question5, setQuestion5] = useState<boolean | undefined>(undefined);
  const [question6, setQuestion6] = useState('');
  const [question7, setQuestion7] = useState('');
  const {t, isOpen, onClose, createVote, hasVoted, code} = props;

  return (
    <Modal isOpen={isOpen} style={styles} bodyOpenClassName="ReactModal__Body--open checklist-modal">
      <div className="modal-checklist">
        <div className="close-btn">
          <img src={closeBtn} srcSet={closeBtn2x} onClick={onClose} />
        </div>
        {hasVoted ? (
          <div>{t('main.checklist.dejarepondu')}</div>
        ) : (
          <div>
            <h2>{t('main.checklist.title')}</h2>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm={9}>
                  {t('main.checklist.question1')}
                </Form.Label>
                <Col sm={3} className="offset-1">
                  <Form.Check
                    inline
                    type="radio"
                    name="question1"
                    value="true"
                    label={t('main.checklist.oui')}
                    checked={question1}
                    onChange={() => setQuestion1(true)}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="question1"
                    value="false"
                    label={t('main.checklist.non')}
                    checked={question1 === false}
                    onChange={() => setQuestion1(false)}
                  />
                </Col>
              </Form.Group>
              <Form.Row>
                <Col sm={12}>
                  <Form.Label>{t('main.checklist.question2')}</Form.Label>
                  <Form.Control
                    className="notes"
                    as="textarea"
                    name="question2"
                    aria-rowcount={2}
                    maxLength={250}
                    value={question2}
                    onChange={(event) => setQuestion2(event.target.value)}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={12}>
                  <Form.Label>{t('main.checklist.question3')}</Form.Label>
                  <Form.Control
                    className="notes"
                    as="textarea"
                    name="question3"
                    aria-rowcount={2}
                    maxLength={250}
                    value={question3}
                    onChange={(event) => setQuestion3(event.target.value)}
                  />
                </Col>
              </Form.Row>
              <Form.Group as={Row}>
                <Form.Label column sm={9}>
                  {t('main.checklist.question4')}
                </Form.Label>
                <Col sm={3} className="offset-1">
                  <Form.Check
                    inline
                    type="radio"
                    name="question4"
                    value="true"
                    label={t('main.checklist.oui')}
                    checked={question4}
                    onChange={() => setQuestion4(true)}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="question4"
                    value="false"
                    label={t('main.checklist.non')}
                    checked={question4 === false}
                    onChange={() => setQuestion4(false)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={9}>
                  {t('main.checklist.question5')}
                </Form.Label>
                <Col sm={3} className="offset-1">
                  <Form.Check
                    inline
                    type="radio"
                    name="question5"
                    value="true"
                    label={t('main.checklist.oui')}
                    checked={question5}
                    onChange={() => setQuestion5(true)}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="question5"
                    value="false"
                    label={t('main.checklist.non')}
                    checked={question5 === false}
                    onChange={() => setQuestion5(false)}
                  />
                </Col>
              </Form.Group>
              <Form.Row>
                <Col sm={12}>
                  <Form.Label>{t('main.checklist.question6')}</Form.Label>
                  <Form.Control
                    className="notes"
                    as="textarea"
                    name="question6"
                    aria-rowcount={2}
                    maxLength={250}
                    value={question6}
                    onChange={(event) => setQuestion6(event.target.value)}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={12}>
                  <Form.Label>{t('main.checklist.question7')}</Form.Label>
                  <Form.Control
                    className="notes"
                    as="textarea"
                    name="question7"
                    aria-rowcount={2}
                    maxLength={250}
                    value={question7}
                    onChange={(event) => setQuestion7(event.target.value)}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={12}>
                  <Form.Label style={{opacity: 0.4}}>{t('main.checklist.gdpr')}</Form.Label>
                </Col>
              </Form.Row>
              <Form.Row className="form-footer">
                <Button
                  variant="outline-light"
                  disabled={question1 === undefined || question4 === undefined || question5 === undefined}
                  onClick={() => {
                    if (question1 !== undefined && question4 !== undefined && question5 !== undefined) {
                      createVote({question1, question2, question3, question4, question5, question6, question7, code});
                    }
                  }}>
                  {t('main.checklist.envoyer')}
                </Button>
              </Form.Row>
            </Form>
          </div>
        )}
      </div>
    </Modal>
  );
}

const mapStateToProps = (state: ReduxAppState): StateProps => {
  return {
    hasVoted: state.hasVoted,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    code: state.code!,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<ReduxAppState, undefined, Action>): DispatchProps => {
  return {
    createVote: (vote: Vote) => dispatch(createVote(vote)),
  };
};

export default connect<StateProps, DispatchProps, unknown, ReduxAppState>(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(ModalChecklist));
