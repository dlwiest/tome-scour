import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useSets } from '../../../../services/scryfall';

const SetSelectController = (onLoadSets: () => void) => {
    const [sets, setSets] = useState([]);
    const toast = useToast();

    const { isLoading, error, data } = useSets();
    useEffect(() => {
        if (error) {
            toast({
                title: 'Request Error',
                description: 'Unable to load set options',
                status: 'error',
                isClosable: true,
            });
        }
    }, [error]);

    useEffect(() => {
        if (data) {
            let sets = data.data.data;
            sets = sets
                .filter((s: any) => !s.digital)
                .sort((a: any, b: any) => a.name > b.name ? 1 : -1);
            setSets(sets);
        } else {
            setSets([]);
        }
    }, [data]);

    useEffect(() => {
        onLoadSets();
    }, [sets]);

    return {
        isLoading,
        sets,
    };
};

export default SetSelectController;