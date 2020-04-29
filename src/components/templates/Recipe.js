import React from 'react';

import Description from '../molecules/description';
import SidePanel from '../atoms/side-panel';
import Body from '../organisms/home/home-body';
import MediumTitle from '../atoms/medium-title';
import RegularText from '../atoms/regular-text';
import RecipeBody from '../organisms/recipe/recipe-body';

// Import mocked data
import data from '../../__mocks__/recipe.json';

export default () => {
  const { instructions, title, description } = data;
  return (
    <Body testid="body">
      <SidePanel testid="side-panel-left">
        <Description
          bigTitle={title}
          titleSize="small"
          text={description}
          testid="description"
        />
      </SidePanel>
      <SidePanel
        background="white"
        testid="side-panel-right"
      >
        <RecipeBody>
          <MediumTitle>
            Recipe Instructions
          </MediumTitle>
          <RegularText>
            {instructions}
          </RegularText>
        </RecipeBody>
      </SidePanel>
    </Body>
  );
};
