import { createAppContainer, createSwitchNavigator } from "react-navigation"
import Main from "./pages/Main";
import LoginTeste from './pages/Login';

const Routes = createAppContainer(createSwitchNavigator({ LoginTeste }));

export default Routes;