import { object, string } from 'yup';

export const fields = {
  cor: {
    type: 'text',
    label: 'Cor do seu veículo:',
    placeholder: 'Insira a cor do carro',
  },
  ano: {
    mask: '9999',
    label: 'Ano do seu veiculo:',
    placeholder: 'Insira o ano do seu carro',
  },
  modelo: {
    type: 'text',
    label: 'Modelo do veículo:',
    placeholder: 'Insira o modelo do seu veículo',
  },
};

export const schema = object({
  cor: string().required('Preencha essa campo'),
  ano: string().required('Preencha essa campo'),
  modelo: string().required('Preencha essa campo'),
}).required();
