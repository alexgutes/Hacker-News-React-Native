import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import FrontPage from '../screens/FrontPage';
import Show from '../screens/Show';
import Ask from '../screens/Ask';

const Tab = createBottomTabNavigator(
  {
    FrontPage,
    Show,
    Ask,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const AppContainer = createAppContainer(Tab);

export default AppContainer;
