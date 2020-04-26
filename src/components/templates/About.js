import React from 'react';

import Description from '../molecules/description';
import SidePanel from '../atoms/side-panel';
import Body from '../organisms/home/home-body';
import AboutImage from '../../assets/about.png';

export default (props) => (
  <Body testid="body">
    <SidePanel testid="side-panel-left">
      <Description
        bigTitle="Pappardelle with rose harissa, black olives and capers"
        subTitle="with ottoenghi"
        text="Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas."
        testid="description"
        onClick={() => props.history.push('/recipe')}
      />
    </SidePanel>
    <SidePanel
      hasBackground
      background={AboutImage}
      testid="side-panel-right"
    />
  </Body>
);
