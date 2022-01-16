import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  AiOutlineQuestionCircle,
  AiOutlineCar,
  AiOutlineCreditCard,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineImport,
} from 'react-icons/ai';
import { BiMoney } from 'react-icons/bi';

import { useOutsideClick, useAuth } from '~/hooks';

import { Container, Sidbar, Sombra } from './styles';
import NSidebarItem from '../NSidebarItem';

const Sidebar = () => {
  const [close, setClose] = useState(false);
  const sidebar = useOutsideClick(() => setClose(false));
  const { isPassenger } = useAuth();

  return (
    <Container>
      <FaBars size={24} onClick={() => setClose(true)} className="icon" />
      <Sombra close={close} />
      <Sidbar ref={sidebar} close={close}>
        <NSidebarItem
          label="Perfil"
          icon={<AiOutlineUser className="icon" />}
          route="/perfil"
        />
        <NSidebarItem
          label="Suporte"
          icon={<AiOutlineQuestionCircle className="icon" />}
          route="/sucesso"
        />
        <NSidebarItem
          label="Viagens"
          icon={<AiOutlineEnvironment className="icon" />}
          route="/viagens"
        />
        {isPassenger && (
          <div>
            <NSidebarItem
              label="Cartão"
              icon={<AiOutlineCreditCard className="icon" />}
            />
            <NSidebarItem
              label="Quero dirigir"
              icon={<AiOutlineCar className="icon" />}
            />
          </div>
        )}
        {!isPassenger && (
          <NSidebarItem
            label="Financeiro"
            icon={<BiMoney className="icon" />}
          />
        )}
        <NSidebarItem
          label="Sair"
          onClick={() => {
            localStorage.clear();
            window.location.reload(true);
          }}
          icon={<AiOutlineImport className="icon" />}
        />
      </Sidbar>
    </Container>
  );
};

export default Sidebar;
