import { useEffect } from 'react';
import { FieldValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface IFormPersistProps {
    name: string;
    watch: UseFormWatch<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    exclusions?: string[];
}

interface IFieldData {
    [name: string]: any;
}

const useFormPersist = ({ name, watch, setValue, exclusions }: IFormPersistProps) => {
    useEffect(() => {
        restoreFieldData();

        const subscription = watch((a) => { persistFieldData(a); });

        return () => subscription.unsubscribe();
    }, [watch]);

    const restoreFieldData = () => {
        const restoredStr = window.localStorage.getItem(`forms/${name}`);

        if (restoredStr) {
            const restored = JSON.parse(restoredStr);

            Object.keys(restored).forEach(k => {
                setValue(k, restored[k]);
            });
        }
    };

    const persistFieldData = (fields: IFieldData) => {
        exclusions?.forEach(e => { delete fields[e]; });
        window.localStorage.setItem(`forms/${name}`, JSON.stringify(fields));
    };

    const clearPersistence = () => {
        window.localStorage.removeItem(`forms/${name}`);
    };

    return { clearPersistence };
};

export default useFormPersist;