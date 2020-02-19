import { createAppContainer, createSwitchNavigator } from "react-navigation"
import Main,{ Modal } from "./pages/Main";
import Login from './pages/Login';
// import Modal from './pages/Modal';
const Routes = createAppContainer(createSwitchNavigator({ 
  Login,
  Main,
  Modal,
},{
  mode: 'modal',
  modal:{ screen: 'Modal' }
}));

export default Routes;