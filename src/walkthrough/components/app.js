// Copyright (c) Microsoft. All rights reserved.

import React from 'react';

import { svgs } from 'utilities';
import { ShellContainer } from "components/shell/shell.container";
import { DashboardContainer, BasicPageContainer, PageWithFlyoutContainer, PageWithGridContainer } from './pages';

export const App = () => {
  const pagesConfig = [
    {
      to: '/dashboard',
      exact: true,
      svg: svgs.tabs.dashboard,
      labelId: 'walkthrough.tabs.dashboard',
      component: DashboardContainer
    },
    {
      to: '/basicpage',
      exact: true,
      svg: svgs.tabs.example,
      labelId: 'walkthrough.tabs.basicPage',
      component: BasicPageContainer
    },
    {
      to: '/pagewithflyout',
      exact: true,
      svg: svgs.tabs.example,
      labelId: 'walkthrough.tabs.pageWithFlyout',
      component: PageWithFlyoutContainer
    },
    {
      to: '/pagewithgrid',
      exact: true,
      svg: svgs.tabs.example,
      labelId: 'walkthrough.tabs.pageWithGrid',
      component: PageWithGridContainer
    }
  ];

  return (
    <ShellContainer pagesConfig={pagesConfig} />
  );
}
