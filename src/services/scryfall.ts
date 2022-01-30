import axios from 'axios';
import { useQuery } from 'react-query';

export interface ISearchQueryParams {
    name?: string,
}

// Sets
const fetchSets = async () => axios.get('https://api.scryfall.com/sets');

export const useSets = () => useQuery('sets', fetchSets);


// Card Search
const fetchSearchResults = async ({ name }: ISearchQueryParams) => (
    axios.get(`https://api.scryfall.com/cards/search?q=${name}`)
);

export const useSearchResults = (params: ISearchQueryParams) => {
    return useQuery(
        ['search', params],
        () => fetchSearchResults(params),
        {
            enabled: false,
        },
    );
};