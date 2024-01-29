import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
    
  );
}


export default App;