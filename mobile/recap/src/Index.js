import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';

import PrincipalScreen from './pages/Principal';
import MedicosScreen from './pages/Medicos';
import PacientesScreen from './pages/Pacientes'


const MainNavigator = createBottomTabNavigator(
  {
  
  Início: {
    screen: PrincipalScreen,
  },
  Médicos: {
    screen: MedicosScreen,  
  },
  Pacientes: {
    screen: PacientesScreen,
  },
},
{
    initialRouteName: 'Início',
    tabBarOptions: {
      showIcon: true,
      showLabel: true, 
      activeTintColor: 'white',
      inactiveBackgroundColor: '#000000',
      activeBackgroundColor: '#000000',
      style: {
        width: '100%',
        height: 50,
      },
      },
    },
  );

export default createAppContainer(createSwitchNavigator(
    {
        MainNavigator
    },
    {
        initialRouteName: 'MainNavigator',
    },
));
