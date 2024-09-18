import axios, { AxiosResponse } from 'axios';
import { ListCats } from './type';

export function getCats(): Promise<AxiosResponse<ListCats>> {
    return axios.get('https://data.latelier.co/cats.json');
}