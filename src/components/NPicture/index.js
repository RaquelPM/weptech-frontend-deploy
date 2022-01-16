import React, { forwardRef } from 'react';

import { BsFillImageFill } from 'react-icons/bs';

import { Container } from './styles';

const NPicture = forwardRef(
  ({ value, square, onChange = () => null, id }, ref) => (
    <Container square={square}>
      <input
        id={id}
        name={id}
        type="file"
        accept="image/*"
        ref={ref}
        onChange={e => onChange(URL.createObjectURL(e.target.files[0]))}
        className="input_image"
      />
      <BsFillImageFill size={42} className="icon" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id} className="label_in" />
      <p className="label">Trocar foto</p>

      {value && <img src={value} alt="imagePerfil" className="image_perfil" />}
    </Container>
  )
);

export default NPicture;
