import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Login from './pages/Login';
import RegisterExpenses from './pages/RegisterExpenses';

const Routes = createAppContainer(createStackNavigator({ 
  Login:{
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },      
  Main:{
    screen: Main,
    navigationOptions: {
      headerShown: false,/* Ocultando o header de paginas especificas*/
    },
  },
  RegisterExpenses:{
    screen: RegisterExpenses,
  },

},{}));


export default Routes;
