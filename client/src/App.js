import React, { useState } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path='/movies/:movieID'>
          <Movie/>
        </Route>
        <Route path='/'>
          <MovieList/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
