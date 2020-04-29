/* eslint-disable no-console */
import React from 'react';
import { withRouter } from 'react-router-dom';

import Description from '../molecules/description';
import ArrowNavigation from '../molecules/arrow-navigation';
import SidePanel from '../atoms/side-panel';
import Body from '../organisms/home/home-body';
import exampleImage from '../../assets/recipe_example.png';

export default withRouter((props) => (
  <>
    <Body testid="body">
      <SidePanel testid="side-panel-left">
        <Description
          bigTitle="Let's cook"
          subTitle="with ottoenghi"
          text="Yotam Ottolenghi—the chef behind instant cookbook classics Jerusalem, Plenty, Ottolenghi Simple and a string of beloved London restaurants—has been at the helm of the culinary vegetable renaissance."
          buttonContent="Discover the recipe"
          testid="description"
          onClick={() => props.history.push('/recipe')}
        />
      </SidePanel>
      <SidePanel
        hasBackground
        background={exampleImage}
        testid="side-panel-right"
      />
    </Body>
    <ArrowNavigation
      testid="arrow-navigation"
      onClickLeft={() => console.log('left')}
      onClickRight={() => console.log('right')}
    />
  </>
));
