import styled from 'styled-components';

import { NModal } from '~/components';

export const Container = styled(NModal)`
  .body {
    padding: 26px 0 31px;

    > .label {
      margin-bottom: 24px;

      max-width: 90%;

      text-align: center;
      font-size: 25px;
    }

    .confirm-button {
      margin: 21px 0 19px;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  height: 150px;
  overflow: auto;

  display: flex;
  flex-direction: column;

  > .timer {
    margin-bottom: 8px;
  }
`;
