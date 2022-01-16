import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Background, NButton, NCardPeople, NTitle } from '~/components';

import { Container } from './styles';
import useDisembarkations from './useDisembarkations';

const Disembarkations = () => {
  const navigate = useNavigate();
  const disembarkations = useDisembarkations();

  return (
    <Container>
      <Background />
      <div className="wrapper">
        <NTitle label="Desembarque" color="white" backStyle="circle" />
        <p className="info">
          R$ {disembarkations.profit} - {disembarkations.time}
        </p>
        <div className="embarkations-div">
          {disembarkations.places.map(item => (
            <NCardPeople {...item} />
          ))}
        </div>
      </div>
      <NButton label="Finalizar" onClick={() => navigate('/sucesso')} />
    </Container>
  );
};

export default Disembarkations;
