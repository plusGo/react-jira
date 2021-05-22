import {useEffect, useState} from 'react';

export const isFalsy = (value: any) => value === 0 ? false : !value;

export const cleanObject = (object: object) => {
    const result = {...object};
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = object[key];
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key];
        }
    });
    return result;
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};

export const useDebounce = <V>(value: V, delay?: number): V => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceValue;
};

export const useArray = <T>(values: T[]) => {
    const [data, setData] = useState(values);

    return [
        data,
        setData,
        (obj: T) => setData([...data, obj]),
        () => setData([]),
        (index: number) => setData(data.filter(($obj, $index) => index !== $index)),

    ];
};
