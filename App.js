import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import FrontPage from './screens/FrontPage';
import Ask from './screens/Ask';
import Show from './screens/Show';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: FrontPage,
  },
  Ask: {
    screen: Ask,
  },
  Show: {
    screen: Show,
  },
});

export default createAppContainer(TabNavigator);
