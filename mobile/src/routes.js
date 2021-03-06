import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Login from './pages/Login';
import RegisterExpenses from './pages/RegisterExpenses';
import RegisterIncomes from "./pages/RegisterIncomes";
import Expenses from './pages/Expenses';
import Incomes from './pages/Incomes';


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
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Nova Despesa" /* Definindo title do header customizado*/
    },
  },
  RegisterIncomes:{
    screen: RegisterIncomes,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Nova Receita",
    },
  },
  Expenses:{
    screen: Expenses,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Despesas",
    }
  },
  Incomes:{
    screen: Incomes,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Receitas",
    }
  },

},{}));


export default Routes;
