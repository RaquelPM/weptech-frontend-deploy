import React, { useState } from 'react';

import { FaEdit } from 'react-icons/fa';

import { NTitle, NButton, NInput, NPicture } from '~/components';
import { useAuth } from '~/hooks';

import { Container } from './styles';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [Name, setName] = useState('Anderson Garcia Meireles');
  const [Email, setEmail] = useState('AndyGarcia@gmail.com');
  const [Telefone, setTelefone] = useState(5531985620561);
  const [Pix, setPix] = useState('AndyGarcia@gmail.com');

  function onSubmit(event) {
    event.preventDefault();
    try {
      const userData = {
        email: Email,
        name: Name,
        telefone: Telefone,
        pix: Pix,
      };

      setUser(userData);
      console.log(user);
    } catch (e) {
      console.log('FAILED.');
    }
  }

  return (
    <Container>
      <NTitle label="Perfil de Motorista" className="title" />
      <FaEdit size={30} className="icon_edit" />

      <form onSubmit={onSubmit}>
        <NPicture />
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
          value={Telefone}
          mask="(99) 9999-9999"
          onChange={e => setTelefone(e.target.value)}
          required
        />

        <NInput
          label="Pix"
          value={Pix}
          onChange={e => setPix(e.target.value)}
          required
        />

        <div className="div_info">
          <p>Placa do Veículo: AAAAA873</p>
          <p>CPF: 111.111.111-11</p>
          <p>Marca modelo e cor de veiculo: Fiat Uno 2003 Azul</p>
        </div>

        <NButton type="submit" label="Salvar alterações" />
      </form>
    </Container>
  );
};

export default Profile;
