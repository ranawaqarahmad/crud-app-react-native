import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import * as Style from "../assets/styles";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Icon, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const Notes = ({ navigation , ...props }) => {


  const deleteNote = (idx) => {
    let newArray = [...props.notes];
    let movedNote = newArray.splice(idx , 1);
    props.setNotes(newArray);
    props.setMoveToBin(movedNote);

    let bin  = [movedNote , ...props.moveToBin];
    props.setMoveToBin(bin)
  }


  return (
    <View style={[styles.notesContainer]}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Your Notes...</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.button, { marginLeft: 40 }]}
            onPress={() => navigation.navigate("DeletedNotes")}
          >
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon
                name="trash-2-outline"
                fill="white"
                style={{ width: 25, height: 50 }}
              />
            </ApplicationProvider>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddNote")}
          >
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon
                name="plus-outline"
                fill="white"
                style={{ width: 25, height: 50 }}
              />
            </ApplicationProvider>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: Style.color }}>
          Total : {props.notes?.length}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Style.color}
          style={[styles.input, { borderWidth: 3 }]}
        />

        <TouchableOpacity style={[styles.searchButton, { width: 50 }]}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <Icon
              name="search"
              fill="white"
              style={{ width: 22, height: 40 }}
            />
          </ApplicationProvider>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {props.notes.length === 0 ? (
          <View style={styles.emptyNoteContainer}>
            <Text style={styles.emptyNoteContainer}>
              There is no note yet! Click on the + button to add
            </Text>
          </View>
        ) : (
          props.notes.map((item, idx) => {
            return (
              <View style={styles.item} key={idx}>
                <View style={{flexDirection: "row" , justifyContent: "space-between"}}>
                <View style={styles.note}>
                  <Text style={styles.index}> {idx + 1}. </Text>
                  <Text style={styles.text}> {item} </Text>
                </View>

                <TouchableOpacity onPress={() => deleteNote(idx)} >
                    <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.deleteContainer}>
                  <Text>{props.date}</Text>

                  <TouchableOpacity>
                    <Text style={styles.delete}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notesContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: Style.color,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: Style.color,
    marginBottom: 5,
  },
  item: {
    marginBottom: 20,
    padding: 15,
    color: "#000",
    opacity: 0.8,
    marginTop: 10,
    shadowColor: Style.color,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#fff",
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    borderLeftWidth: 15,
  },
  index: {
    fontSize: 20,
    fontWeight: "800",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: Style.color,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
  },
  scrollView: {
    marginBottom: 70,
  },
  note: {
    flexDirection: "row",
    alignItems:"baseline",
    width: "75%",
  },
  text: {
    fontWeight: "700",
    fontSize: 15,
  },
  delete: {
    color: Style.color,
    fontWeight: "700",
    fontSize: 15,
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    width: "65%",
    fontSize: 19,
    color: "#000",
    fontWeight: "600",
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#fff",
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  searchButton: {
    backgroundColor: Style.color,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    borderRadius: 5,
    height: 40,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  emptyNoteContainer: {
    alignItems: "center",
    marginTop: 240,
  },
  emptyNoteText: {
    color: Style.color,
    fontWeight: "600",
    fontSize: 15,
  },
  deleteContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default Notes;
