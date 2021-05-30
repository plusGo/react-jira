import {User} from '../screens/project-list/search-panel';
import {useHttp} from './http';
import {useAsync} from './use-async';
import {useEffect} from 'react';

export const useUsers = () => {
    const client = useHttp();
    const {run, ...result} = useAsync<User[]>();

    useEffect(() => {
        run(client('users'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return result;
};
