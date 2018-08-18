// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { SettingsContainer, ManageDeviceGroupsContainer } from './flyouts';

// App Components
import Header from './components/header/header';
import NavigationContainer from './components/navigation/navigationContainer';
import Main from './components/main/main';
import { PageNotFoundContainer as PageNotFound } from './pages/pageNotFound'

import './shell.css';

/** The base component for the app shell */
class Shell extends Component {

  constructor(props) {
    super(props);

    this.state = { openFlyout: '' };
  }

  componentDidMount() {
    const { history, registerRouteEvent } = this.props;
    // Initialize listener to inject the route change event into the epic action stream
    history.listen(({ pathname }) => registerRouteEvent(pathname));
  }

  closeFlyout = () => this.setState({ openFlyout: '' });

  openSettings = () => this.setState({ openFlyout: 'settings' });

  render() {
    const { pagesConfig, logout, t, theme, deviceGroupFlyoutIsOpen } = this.props;
    const { openFlyout } = this.state;

    return (
      <div className={`shell-container theme-${theme}`}>
        {pagesConfig &&
          <div className="shell">
            <NavigationContainer tabs={pagesConfig} t={t} />
            <Main>
              <Header openSettings={this.openSettings} logout={logout} t={t} />
              <Switch>
                <Redirect exact from="/" to={pagesConfig[0].to} />
                {pagesConfig.map(({ to, exact, component }) =>
                  <Route key={to} exact={exact} path={to} component={component} />)
                }
                <Route component={PageNotFound} />
              </Switch>
              {deviceGroupFlyoutIsOpen && <ManageDeviceGroupsContainer />}
              {openFlyout === 'settings' && <SettingsContainer onClose={this.closeFlyout} />}
            </Main>
          </div>
        }
      </div>
    );
  }
}

export default Shell;
