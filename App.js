import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: MemoListScreen,
    Detail: MemoDetailScreen,
    Edit: MemoEditScreen,
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2C4956',
      },
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);


export default createAppContainer(App);
