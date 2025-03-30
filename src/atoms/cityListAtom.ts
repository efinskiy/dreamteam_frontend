import { atom } from 'jotai';

export interface ICity {
    id: number;
    name: string;
    name_english: string;
    name_dative: string;
}

export type TCityList = ICity[];

export const cityListAtom = atom<TCityList>([]);
