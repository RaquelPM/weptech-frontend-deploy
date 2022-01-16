import { ApiPoints } from './const';

export const getPoints = () => ({ data: ApiPoints });

export const postPoint = (street, number, reference) => {
  ApiPoints.push({ id: 5, name: street, adress: `${number}, ${reference}` });
};
