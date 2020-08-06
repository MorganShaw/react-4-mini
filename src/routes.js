import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import TopicList from './Components/TopicList';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/topics' component={TopicList} />
    </Switch>
)


//Could save this to a variable and put export at the bottom, but this is more concise.