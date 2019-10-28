import axios from 'axios';

import { ProductionType } from '../store/types';

const baseUrl = 'https://api.carbonintensity.org.uk';

axios.defaults.baseURL = baseUrl;

export const getGeneration = (): Promise<ProductionType[]> => {
   return axios.get('/generation').then(
       res => res.data.data.generationmix
   );
};

