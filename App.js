

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Notes"> 
        {props => <Notes {...props} /> }
      </Stack.Screen>
      <Stack.Screen name="AddNote">
        {props => <AddNote {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
   
  );
};
export default App;
