import { object, string, ref } from 'yup';

export const fields = {
  name: {
    type: 'text',
    label: 'Nome:',
    placeholder: 'Insira o seu nome completo.',
  },
  email: {
    type: 'email',
    label: 'Email:',
    placeholder: 'Digite o seu melhor email.',
  },
  phone: {
    mask: '(99) 99999-9999',
    label: 'Número de telefone:',
    placeholder: 'Insira o seu telefone',
  },
  password: {
    type: 'password',
    label: 'Senha:',
    placeholder: 'Insira a senha da sua conta.',
  },
  passwordMatch: {
    type: 'password',
    label: 'Confirmar Senha:',
    placeholder: 'Insira a senha novamente.',
  },
  city: {
    type: 'selector',
    label: 'Cidade:',
    placeholder: 'Sua cidade:',
  },
  neighbour: {
    type: 'selector',
    label: 'Bairro:',
    placeholder: 'Seu bairro:',
  },
};

export const extraFields = {
  cpf: {
    mask: '999.999.999-99',
    label: 'CPF:',
    placeholder: 'Insira o seu CPF',
  },
  pix: {
    type: 'text',
    label: 'Pix:',
    placeholder: 'Pix que recebera os pagamentos',
  },
};

export const schema = object({
  name: string().required('Preencha esse campo!'),
  email: string()
    .email('Adicione um email válido!')
    .required('Preencha esse campo!'),
  phone: string()
    .matches(/\(\d\d\) \d{5}-\d{4}/, 'Adicione um número válido!')
    .required('Preencha esse campo!'),
  password: string()
    .required('Preencha esse campo!')
    .min(8, 'Senha muito curta!'),
  passwordMatch: string()
    .oneOf([ref('password'), null], 'As senhas são diferentes!')
    .required('Preencha esse campo!'),
  city: string().required('Preencha esse campo!'),
  neighbour: string().required('Preencha esse campo!'),
  pix: string(),
  cpf: string(),
}).required();
