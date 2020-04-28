import React, { useState } from 'react';

// React-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// App components
import Main from './components/layouts/main';
import HomeHeader from './components/organisms/home/home-header';
import Navigation from './components/molecules/navigation';

import Home from './components/templates/Home';
import About from './components/templates/About';
import Contact from './components/templates/Contact';
import Recipe from './components/templates/Recipe';

const App = () => {
  // State to deal with querying
  // const [queryState, setQueryState] = useState({
  //   fetching: false,
  //   readyToFetch: false,
  //   logged: false,
  // });

  const [navIndex, setNavIndex] = useState(-1);

  // Effect to check if we can activate button
  // useEffect(() => {
  //   setQueryState({ fetching: false, readyToFetch: true });
  // }, []);

  // Simulate API call
  // const fetchMock = () => {
  //   setQueryState({ fetching: true, readyToFetch: false });
  //   const timeout = setTimeout(() => {
  //     setQueryState({ fetching: false, readyToFetch: false, logged: true });
  //     clearTimeout(timeout);
  //   }, 4000);
  // };

  return (
    <Router>
      <Main>
        <HomeHeader>
          <Navigation
            testid="navigation"
            checkedIndex={navIndex}
            onClick={(index) => setNavIndex(index)}
            elements={[
              { name: 'Recipes', href: '' },
              { name: 'About', href: 'about' },
              { name: 'Contact', href: 'contact' },
            ]}
          />
        </HomeHeader>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
