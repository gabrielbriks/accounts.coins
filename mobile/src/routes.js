import { createAppContainer, createSwitchNavigator } from "react-navigation";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";


import Main, { Modal } from "./pages/Main";
import Login from './pages/Login';

const Routes = createAppContainer(createStackNavigator({ 
  Login:{
    screen: Login,
    navigationOptions:{
      headerMode: 'none',
    }
  },
  Main,
}));

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
