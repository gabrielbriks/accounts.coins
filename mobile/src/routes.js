import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main, { ModalScreen } from "./pages/Main";
import Login from './pages/Login';

const Routes = createAppContainer(createStackNavigator({ 
  Login,
  
  Main,
  ModalScreen:{
    screen: ModalScreen,
   
  }
},{headerMode: "none"}));

//  const ModalScreen = createStackNavigator({
//     MainModal: {screen: Modal}
//   }, {
//     mode: 'modal',
//       headerMode: 'none',
//       cardStyle: {
//         backgroundColor: 'transparent',
//         shadowColor: 'transparent'
//       },
//   });

export default Routes;
