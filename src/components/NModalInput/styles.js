import styled from 'styled-components';

import NModal from '../NModal';

export const Container = styled(NModal)`
  .body {
    padding: 24px 0 33px;

    .icon {
      width: 65px;
      height: 65px;
    }

    .label {
      margin: 12px 0 18px;

      max-width: 90%;

      text-align: center;
      font-size: 22px;
    }

    .button {
      margin-top: 19px;
    }
  }
`;
