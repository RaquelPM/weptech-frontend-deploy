// import React, { useState } from 'react';
// import { AiFillClockCircle } from 'react-icons/ai';

// import {
//   NButton,
//   NCardDrop,
//   NCardHistory,
//   NCardItem,
//   NCardPeople,
//   NCardPeopleItem,
//   NCardTrip,
//   NCounter,
//   NInput,
//   NModalConfirm,
//   NModalInput,
//   NSearch,
//   NSelector,
//   NSmallButton,
//   NTimer,
//   NTitle,
//   NSidebarItem,
//   Sidebar,
//   NCardHistoryDriver,
//   NModalSure,
// } from '~/components';

// import { Container, Section, Label } from './styles';

// const Components = () => {
//   const [counter, setCounter] = useState(0);
//   const [selector, setSelector] = useState();
//   const [smallButton, setSmallButton] = useState(false);
//   const [modalConfirm, setModalConfirm] = useState(false);
//   const [modalInput, setModalInput] = useState(false);
//   const [modalSure, setModalSure] = useState(false);

//   return (
//     <Container>
//       <button type="button" id="add-button">
//         Add to home screen
//       </button>
//       <Section>
//         <Label>NButton</Label>
//         <NButton color="primary" label="Confirmar" />
//         <NButton color="white" label="Trocar" />
//         <NButton color="red" label="Cancelar" />
//       </Section>
//       <Section>
//         <Label>NSidebarItem</Label>
//         <NSidebarItem
//           label="Login"
//           icon={<AiFillClockCircle className="icon" />}
//           route="/login"
//         />
//       </Section>
//       <Section>
//         <Label>Sidebar</Label>
//         <Sidebar />
//       </Section>
//       <Section>
//         <Label>NCardDrop</Label>
//         <NCardDrop name="Nome do Local" adress="Endereço do local" />
//       </Section>
//       <Section>
//         <Label>NCardHistory</Label>
//         <NCardHistory
//           date="10/12/2021"
//           time="09:30"
//           price="7,50"
//           originNeighbour="Bairro Origem"
//           destinyNeighbour="Bairro Destino"
//           origin="Rua de embarque"
//           destiny="Rua de desembarque"
//           driver="Nome do motorista"
//         />
//       </Section>
//       <Section>
//         <Label>NCardHistoryDriver</Label>
//         <NCardHistoryDriver
//           date="10/12/2021"
//           time="09:30"
//           profit="40,00"
//           origin="Origem"
//           destiny="Destino"
//           passengers={[
//             {
//               name: 'Passageiro 1',
//               place: 'Local 1',
//             },
//             {
//               name: 'Passageiro 2',
//               place: 'Local 2',
//             },
//           ]}
//         />
//       </Section>
//       <Section>
//         <Label>NCardItem</Label>
//         <NCardItem label="Texto" />
//       </Section>
//       <Section>
//         <Label>NCardPeople</Label>
//         <NCardPeople
//           name="Nome do local"
//           adress="Endereço detalhado"
//           people="Passageiro"
//           price="5,00"
//           zap
//           check
//         />
//       </Section>
//       <Section>
//         <Label>NCardPeopleItem</Label>
//         <NCardPeopleItem zap people="Passageiro" money="5,00" check />
//       </Section>
//       <Section>
//         <Label>NCardTrip</Label>
//         <NCardTrip
//           adress1="Origem"
//           adress2="Destino"
//           price="5,00"
//           time="10 min"
//         />
//       </Section>
//       <Section>
//         <Label>NCounter</Label>
//         <NCounter label="Vagas" value={counter} onChange={setCounter} />
//       </Section>
//       <Section>
//         <Label>NInput</Label>
//         <NInput label="Nome" placeholder="Insira seu nome completo." />
//       </Section>
//       <Section>
//         <Label>NModalConfirm</Label>
//         <NButton label="Abrir" onClick={() => setModalConfirm(true)} />
//         <NModalConfirm
//           visible={modalConfirm}
//           label="O local de embarque está correto?"
//           content="Local de Embarque"
//           confirmLabel="Sim, Confirmar"
//           cancelLabel="Não, Cancelar"
//           onCancel={() => setModalConfirm(false)}
//           onConfirm={() => setModalConfirm(false)}
//         />
//       </Section>
//       <Section>
//         <Label>NModalSure</Label>
//         <NButton label="Abrir" onClick={() => setModalSure(true)} />
//         <NModalSure
//           visible={modalSure}
//           label="Tem certeza que deseja entrar nessa viagem?"
//           onCancel={() => setModalSure(false)}
//           onConfirm={() => setModalSure(false)}
//         />
//       </Section>
//       <Section>
//         <Label>NModalInput</Label>
//         <NButton label="Abrir" onClick={() => setModalInput(true)} />
//         <NModalInput
//           label="Para facilitar, digite um ponto de referência:"
//           placeholder="Insira o ponto de referência."
//           visible={modalInput}
//           buttonLabel="Confirmar"
//           onButtonClick={() => setModalInput(false)}
//         />
//       </Section>
//       <Section>
//         <Label>NSearch</Label>
//         <NSearch placeholder="Bairro de destino..." />
//       </Section>
//       <Section>
//         <Label>NSelector</Label>
//         <NSelector
//           label="Cidade"
//           placeholder="Selecione sua cidade:"
//           value={selector}
//           onChange={setSelector}
//           options={[
//             'João Pessoa',
//             'Campina Grande',
//             'São Paulo',
//             'Rio de Janeiro',
//             'Salvador',
//           ]}
//         />
//       </Section>
//       <Section>
//         <Label>NSmallButton</Label>
//         <NSmallButton label="Confirmar" />
//         <NSmallButton label="Trocar" color="white" />
//         <NSmallButton
//           label="Passageiro"
//           selected={!smallButton}
//           onClick={() => setSmallButton(false)}
//         />
//         <NSmallButton
//           label="Motorista"
//           selected={smallButton}
//           onClick={() => setSmallButton(true)}
//         />
//       </Section>
//       <Section>
//         <Label>NTimer</Label>
//         <NTimer label="9:30 - R$ 5,00" />
//       </Section>
//       <Section>
//         <Label>NTitle</Label>
//         <NTitle label="Cadastro" />
//         <NTitle label="Cadastro" color="white" />
//       </Section>
//     </Container>
//   );
// };

// export default Components;
