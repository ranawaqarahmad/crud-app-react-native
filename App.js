import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import DeletedNotes from "./components/DeletedNotes";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);

  const handleNote = () => {
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote("");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes">
          {(props) => <Notes {...props} notes={notes} setNotes={setNotes} note={note} setNote={setNote} />}
        </Stack.Screen>
        <Stack.Screen name="AddNote">
          {(props) => (
            <AddNote
              {...props}
              note={note}
              setNote={setNote}
              handleNote={handleNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DeletedNotes">
          {(props) => <DeletedNotes {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
