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
  const [navIndex, setNavIndex] = useState(-1);
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
