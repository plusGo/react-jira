import React, {useEffect, useState} from 'react';
import {cleanObject, useDebounce, useMount} from '../../utils';
import {SearchPanel} from './search-panel';
import {List} from './list';
import {useHttp} from '../../utils/http';
import styled from '@emotion/styled';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([]);

    const [param, setParam] = useState({
        name: '',
        personId: ''
    });

    const debounceParam = useDebounce(param, 1000);
    const [list, setList] = useState([]);
    const client = useHttp();
    useEffect(() => {
        client('projects', {data: cleanObject(debounceParam)})
            .then(setList);
    }, [debounceParam]);

    useMount(() => {
        client('users').then(setUsers);
    });

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List list={list} users={users}/>
        </Container>
    )
};

const Container = styled.div`
padding: 3.2rem;
`;
