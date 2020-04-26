import React from 'react';

import Description from '../molecules/description';
import SidePanel from '../atoms/side-panel';
import Body from '../organisms/home/home-body';

export default () => (
  <Body testid="body">
    <SidePanel testid="side-panel-left">
      <Description
        bigTitle=" Let’s know about me"
        subTitle="with ottoenghi"
        text="Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas."
        testid="description"
        onClick={() => console.log('View recipe')}
      />
    </SidePanel>
    <SidePanel
      background="white"
      testid="side-panel-right"
    >
      <span>Recipe</span>
    </SidePanel>
  </Body>
);
