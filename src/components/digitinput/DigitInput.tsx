import React from 'react';
import useDigitInput from 'react-digit-input';
import './digitinput.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
  code_entered: boolean;
};

function DigitInput(props: Props): JSX.Element {
  const {value, onChange, code_entered} = props;
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 5,
    value,
    onChange,
  });
  return (
    <div className={code_entered ? 'digit-input-group red' : 'digit-input-group'}>
      <input id="first-input" inputMode="decimal" autoFocus {...digits[0]} />
      <input inputMode="decimal" {...digits[1]} />
      <input inputMode="decimal" {...digits[2]} />
      <input inputMode="decimal" {...digits[3]} />
      <input inputMode="decimal" {...digits[4]} />
    </div>
  );
}

export default DigitInput;
