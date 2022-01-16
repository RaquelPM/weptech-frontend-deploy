import React from 'react';

import { Container } from './styles';

const Loading = () => (
  <Container>
    <div className="spinner-box">
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1" />
        <div className="pulse-bubble pulse-bubble-2" />
        <div className="pulse-bubble pulse-bubble-3" />
      </div>
    </div>
  </Container>
);

export default Loading;
