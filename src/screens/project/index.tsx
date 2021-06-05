import React from 'react';
import {Link} from 'react-router-dom';
import {Navigate, Route, Routes} from 'react-router';
import {EpicScreen} from '../epic';
import {KanbanScreen} from '../kanban';

export const ProjectScreen = () => {
    return (
        <div>
            <h1>ProjectScreen</h1>
            <Link to={'kanban'}>看板</Link>
            <Link to={'epic'}>任务组</Link>
            <Routes>
                <Route path={'/kanban'} element={<KanbanScreen/>}/>
                <Route path={'/epic'} element={<EpicScreen/>}/>
                <Navigate to={window.location.pathname + '/kanban'}/>

            </Routes>
        </div>
    )
};