import React from 'react';
import './Thumbnail.css';

type Props = {
  className?: string;
  image: string;
};

function Thumbnail(props: Props): JSX.Element {
  return <img className="thumbnail" src={props.image} />;
}

export default Thumbnail;
