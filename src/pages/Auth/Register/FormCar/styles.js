import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  padding-bottom:30px

  display: flex;
  flex-direction: column;

  > .ntitle {
    position: absolute;
    top: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  gap: 12px;

  button {
    margin: 15px 0 30px 0;
  }
`;

export const DivPic = styled.div`
  > .label {
    margin: 5px 0px 5px 15px;
  }
`;
