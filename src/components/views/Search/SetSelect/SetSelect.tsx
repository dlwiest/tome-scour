import { SpinnerIcon } from '@chakra-ui/icons';
import {
    Select
} from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import useSetSelectController from './SetSelect.controller';

interface ISetSelectProps {
    register: UseFormRegister<FieldValues>;
    onLoadSets: () => void;
    [key: string]: any;
}

const SetSelect = ({ register, onLoadSets, ...props }: ISetSelectProps) => {
    const { isLoading, sets } = useSetSelectController(onLoadSets);

    return <Select
        placeholder='Select a Set'
        isDisabled={isLoading}
        {...register('set')}
        {...props}>
        {sets.map((s: any) => <option key={s.code} value={s.code}>{s.name}</option>)}
    </Select>;
};

export default SetSelect;