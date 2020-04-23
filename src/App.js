import React, { useState, useEffect } from 'react';

// App components
import Main from './components/layouts/main';
import Home from './components/organisms/home';
import HomeHeader from './components/organisms/home/home-header';
import Navigation from './components/molecules/navigation';
import Description from './components/molecules/description';
import ArrowNavigation from './components/molecules/arrow-navigation';

import SidePanel from './components/atoms/side-panel';
import HomeBody from './components/organisms/home/home-body';
import exampleImage from './assets/recipe_example.png';

const App = () => {
  // State to deal with querying
  const [queryState, setQueryState] = useState({
    fetching: false,
    readyToFetch: false,
    logged: false,
  });

  const [navIndex, setNavIndex] = useState(0);

  // Effect to check if we can activate button
  useEffect(() => {
    setQueryState({ fetching: false, readyToFetch: true });
  }, []);

  // Simulate API call
  const fetchMock = () => {
    setQueryState({ fetching: true, readyToFetch: false });
    const timeout = setTimeout(() => {
      setQueryState({ fetching: false, readyToFetch: false, logged: true });
      clearTimeout(timeout);
    }, 4000);
  };

  return (
    <Main>
      {!queryState.logged && (
        <Home>
          <HomeHeader>
            <Navigation
              testid="navigation"
              checkedIndex={navIndex}
              onClick={(index) => setNavIndex(index)}
              elements={[
                { name: 'Recipes', href: 'recipes' },
                { name: 'About', href: 'about' },
                { name: 'Contact', href: 'contact' },
              ]}
            />
          </HomeHeader>
          <HomeBody testid="body">
            <SidePanel testid="side-panel-left">
              <Description
                bigTitle="Let's cook"
                subTitle="with ottoenghi"
                text="Yotam Ottolenghi—the chef behind instant cookbook classics Jerusalem, Plenty, Ottolenghi Simple and a string of beloved London restaurants—has been at the helm of the culinary vegetable renaissance."
                buttonContent="Discover the recipes"
                testid="description"
                onClick={() => console.log('View recipe')}
              />
            </SidePanel>
            <SidePanel
              hasBackground
              background={exampleImage}
              testid="side-panel-right"
            />
          </HomeBody>
          <ArrowNavigation
            testid="arrow-navigation"
            onClickLeft={() => console.log('left')}
            onClickRight={() => console.log('right')}
          />
        </Home>
      )}
    </Main>
  );
};

export default App;
