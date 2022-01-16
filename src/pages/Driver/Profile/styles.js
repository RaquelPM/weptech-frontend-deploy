import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  > .title {
    top: 45px;
    position: absolute;
    margin-bottom: 20px;
  }

  .icon_edit {
    color: #4d4d4d;
    position: absolute;
    top: 45px;
    right: 20px;
  }

  .div_info {
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    width: 280px;
  }
`;
