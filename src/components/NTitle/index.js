import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Container } from './styles';

const NHeader = ({
  label = '',
  color,
  backStyle,
  forwardStyle,
  onBack,
  noBack,
  onForward,
  zap,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <Container titleColor={color} {...rest}>
      {!noBack && (
        <button className="back-button" type="button">
          {backStyle === 'circle' ? (
            <BsFillArrowLeftCircleFill
              size={30}
              onClick={onBack || (() => navigate(-1))}
            />
          ) : (
            <BiArrowBack size={30} onClick={onBack || (() => navigate(-1))} />
          )}
        </button>
      )}

      <h1 className="label">{label}</h1>
      {onForward && (
        <button className="forward-button" type="button">
          {forwardStyle === 'line' ? (
            <BiArrowBack size={30} onClick={onForward} />
          ) : (
            <BsFillArrowRightCircleFill size={30} onClick={onForward} />
          )}
        </button>
      )}
      {zap && (
        <button className="forward-button-zap" type="button">
          <AiOutlineWhatsApp size={28} />
        </button>
      )}
    </Container>
  );
};

export default NHeader;
