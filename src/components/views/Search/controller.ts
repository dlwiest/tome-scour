import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { useFormPersist } from "../../../hooks";

const SearchController = () => {
    const {
        handleSubmit,
        register,
        watch,
        setValue,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm({
        shouldUnregister: false,
    });

    useFormPersist({ name: 'search-form', watch, setValue });

    const search = ({ name }: FieldValues) => {
        return axios.get(`https://api.scryfall.com/cards/search?order=name&q=name:${name}`);
    };

    const query = useMutation(search, {
        onError: () => {
            alert('Error running search query');
        }
    });

    const onSubmit = async (data: FieldValues) => {
        await query.mutateAsync(data);        
    };

    return {
        register,
        errors,
        isSubmitting,
        onSubmit: handleSubmit(onSubmit),
        query,
    };
};

export default SearchController;