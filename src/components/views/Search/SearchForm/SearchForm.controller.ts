import { FieldValues, useForm } from 'react-hook-form';
import { useFormPersist } from '../../../../hooks';

export interface ISearchFormProps {
    onSearch: (params: FieldValues) => void;
    isLoading: boolean,
}

const SearchFormController = ({ onSearch, isLoading }: ISearchFormProps) => {
    const {
        handleSubmit,
        register,
        watch,
        setValue,
        reset,
        formState: { errors }
    } = useForm({
        shouldUnregister: false,
    });

    const { restoreFieldData } = useFormPersist({ name: 'searchForm', watch, setValue });

    const onSubmit = (data: FieldValues) => onSearch(data)

    return {
        onSubmit: handleSubmit(onSubmit),
        isLoading,
        errors,
        register,
        restoreFieldData,
        reset,
    };
};

export default SearchFormController;