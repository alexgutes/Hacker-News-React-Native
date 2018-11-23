import React from 'react';
import { bottomTabNavigator } from 'react-navigation';

import FrontPage from '../screens/FrontPage';
import Show from '../screens/Show';
import Ask from '../screens/Ask';

const Tab = bottomTabNavigator({
  FrontPage,
  Show,
  Ask,
});

export default Tab;
