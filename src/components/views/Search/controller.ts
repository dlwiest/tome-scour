import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";

const SearchController = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm();

    const search = (queryParams: FieldValues) => {
        return axios.get('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3');
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