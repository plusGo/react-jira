import React from 'react';
import {useDebounce} from '../../utils';
import {SearchPanel} from './search-panel';
import {List} from './list';
import styled from '@emotion/styled';
import {Typography} from 'antd';
import {useProjects} from '../../utils/project';
import {useUsers} from '../../utils/user';
import {useUrlQueryParam} from '../../utils/url';

export const ProjectListScreen = () => {

    const [param, setParam] = useUrlQueryParam(['name', 'personId']);

    const debounceParam = useDebounce(param, 1000);

    const {isLoading, error, data: list} = useProjects(debounceParam);
    const {data: users} = useUsers();

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users || []} param={param} setParam={setParam}/>
            {error ? <Typography.Text type={'danger'}>{error?.message}</Typography.Text> : null}
            <List loading={isLoading} dataSource={list || []} users={users || []}/>
        </Container>
    )
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
padding: 3.2rem;
`;
