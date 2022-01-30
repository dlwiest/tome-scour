import { useEffect, useState } from 'react';
import { useIsMount } from '../../../hooks/useIsMount';
import { ISearchQueryParams, useSearchResults } from '../../../services/scryfall';

const SearchController = () => {
    const [queryParams, setQueryParams] = useState<ISearchQueryParams>({ name: '' })
    const isMount = useIsMount();

    const { refetch, isLoading, isRefetching, data } = useSearchResults(queryParams);
    console.log(data);

    useEffect(() => {
        if (!isMount) refetch();
    }, [queryParams])

    return {
        onSearch: setQueryParams,
        isLoading: isLoading || isRefetching
    }
};

export default SearchController;