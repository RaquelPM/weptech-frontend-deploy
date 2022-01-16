import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Background, NButton, NCardPeople, NTitle } from '~/components';

import { Container } from './styles';
import useEmbarkations from './useEmbarkations';

const Embarkations = () => {
  const navigate = useNavigate();

  const embarkations = useEmbarkations();

  return (
    <Container>
      <Background />
      <div className="wrapper">
        <NTitle
          label="Embarque"
          color="white"
          noBack
          onForward={() => navigate('/desembarques')}
        />
        <p className="info">
          R$ {embarkations.profit} - {embarkations.time}
        </p>
        <div className="embarkations-div">
          {embarkations.places.map(item => (
            <NCardPeople {...item} />
          ))}
        </div>
      </div>
      <NButton label="Desembarque" onClick={() => navigate('/desembarques')} />
    </Container>
  );
};

export default Embarkations;
