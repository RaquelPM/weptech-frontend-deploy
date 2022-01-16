import { ApiTimes } from './const';

export const getTimes = () => ({ data: ApiTimes });

export const addTime = data => ({ data: [...ApiTimes, data] });
