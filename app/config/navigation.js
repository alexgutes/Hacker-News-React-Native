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
      activeTintColor: 'rgb(255,91,1)',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 18,
        fontFamily: 'open-sans',
      },
    },
  },
);

const AppContainer = createAppContainer(Tab);

export default AppContainer;
