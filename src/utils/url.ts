import {useSearchParams} from 'react-router-dom';
import {useMemo} from 'react';

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return [
        useMemo(() => {
            return keys.reduce((prev, key) => {
                return {...prev, [key]: searchParams.get(key) || ''}
            }, {} as { [key in K]: string })
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchParams])
        ,
        setSearchParams
    ] as const;
};
