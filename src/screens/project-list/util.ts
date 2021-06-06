import {useUrlQueryParam} from '../../utils/url';
import {useMemo} from 'react';
import {useAsync} from '../../utils/use-async';
import {useHttp} from '../../utils/http';
import {Project} from './list';

export const useProjectSearchParams = () => {
    const [param, setParam] = useUrlQueryParam(['name', 'personId']);
    return [
        useMemo(() => ({...param, personId: Number(param.personId) || undefined}), [param]),
        setParam
    ] as const;
};

export const useEditProject = () => {
    const {run, ...asyncResult} = useAsync();
    const client = useHttp();
    const mutate = (params: Partial<Project>) => {
        return run(client(`projects/${params.id}`, {
            data: params,
            method: 'PATCH'
        }))
    };
    return {
        mutate,
        ...asyncResult
    }
};

export const useAddProject = () => {
    const {run, ...asyncResult} = useAsync();
    const client = useHttp();
    const mutate = (params: Partial<Project>) => {
        return run(client(`projects/${params.id}`, {
            data: params,
            method: 'POST'
        }))
    };
    return {
        mutate,
        ...asyncResult
    }
};

