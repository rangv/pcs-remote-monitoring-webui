// Copyright (c) Microsoft. All rights reserved.

import React from 'react';

import { svgs } from 'utilities';
import { ShellContainer } from "./shell/shell.container";
import { DashboardContainer, DevicesContainer, RulesContainer, MaintenanceContainer } from './pages';

export const App = () => {
  const pagesConfig = [
    {
      to: '/dashboard',
      exact: true,
      svg: svgs.tabs.dashboard,
      labelId: 'tabs.dashboard',
      component: DashboardContainer
    },
    {
      to: '/devices',
      exact: true, svg:
        svgs.tabs.devices,
      labelId: 'tabs.devices',
      component: DevicesContainer
    },
    {
      to: '/rules',
      exact: true,
      svg: svgs.tabs.rules,
      labelId: 'tabs.rules',
      component: RulesContainer
    },
    {
      to: '/maintenance',
      exact: false,
      svg: svgs.tabs.maintenance,
      labelId: 'tabs.maintenance',
      component: MaintenanceContainer
    }
  ];

  return (
    <ShellContainer pagesConfig={pagesConfig} />
  );
}
