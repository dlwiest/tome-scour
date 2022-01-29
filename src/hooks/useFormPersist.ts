import { useEffect } from 'react';
import { FieldValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface IFormPersistProps {
    name: string;
    watch: UseFormWatch<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    exclusions?: string[];
    onRestoredFields?: () => void;
}

interface IFieldData {
    [name: string]: any;
}

const useFormPersist = ({
    name,
    watch,
    setValue,
    exclusions,
    onRestoredFields = () => { },
}: IFormPersistProps) => {

    useEffect(() => {
        restoreFieldData();

        const subscription = watch((a: IFieldData) => { persistFieldData(a); });
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

        onRestoredFields();
    };

    const persistFieldData = (fields: IFieldData) => {
        exclusions?.forEach(e => { delete fields[e]; });
        window.localStorage.setItem(`forms/${name}`, JSON.stringify(fields));
    };

    const clearPersistence = () => {
        window.localStorage.removeItem(`forms/${name}`);
    };

    return { clearPersistence, restoreFieldData, persistFieldData };
};

export default useFormPersist;