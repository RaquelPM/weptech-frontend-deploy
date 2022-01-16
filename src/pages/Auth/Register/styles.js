import styled from 'styled-components';

import { NButton } from '~/components';

export const Container = styled.div`
  padding-top: 51px;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Selectors = styled.div`
  margin: 32px 0 25px;

  width: calc(100vw - 104px);
  max-width: 488px;

  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
`;

export const Button = styled(NButton)`
  margin: 28px 0 23px;
`;
