import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchAppBar from './components/SearchAppBar';
import CategoryPath from './components/CategoryPath'
import Search from './pages/Search';
import Detail from './pages/Detail';

const App = () => {
  const [categories, setCategories] = useState([]);

  const routes = [
    { path: "/items", component: <Search setCategories={setCategories} /> },
    { path: "/items/:id", component: <Detail /> }
  ];

  return (
    <Router>
      <SearchAppBar />
      <CategoryPath categories={categories} />
      <Switch>
        {routes.map((route, index) =>
          <Route exact path={route.path} key={index}>
            {route.component}
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
