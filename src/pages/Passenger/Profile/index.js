import React, { useState } from 'react';

import { FaEdit } from 'react-icons/fa';

import { NTitle, NButton, NInput } from '~/components';
import { useAuth } from '~/hooks';

import { Container } from './styles';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [Name, setName] = useState('Anderson Garcia Meireles');
  const [Email, setEmail] = useState('AndyGarcia@gmail.com');
  const [Telefone, setTelefone] = useState(83944444444);

  function onSubmit(event) {
    event.preventDefault();

    try {
      const userData = {
        email: Email,
        name: Name,
        telefone: Telefone,
      };

      setUser(userData);
      console.log(user);
    } catch (e) {
      console.log('FAILED.');
    }
  }

  return (
    <Container>
      <NTitle label="Perfil" className="title" />
      <FaEdit size={30} className="icon_edit" />

      <form onSubmit={onSubmit}>
        <NInput
          label="Nome"
          value={Name}
          onChange={e => setName(e.target.value)}
          required
        />
        <NInput
          label="Email"
          value={Email}
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <NInput
          label="Whatsapp"
          mask="(99) 9999-9999"
          value={Telefone}
          onChange={e => setTelefone(e.target.value)}
          required
        />

        <NButton type="submit" label="Salvar alterações" />
      </form>
    </Container>
  );
};

export default Profile;
