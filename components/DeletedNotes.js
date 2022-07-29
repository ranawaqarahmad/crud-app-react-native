import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Style from "../assets/styles";

const DeletedNotes = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.notesContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.emptyButton}>
              <Text style={styles.emptyButtonText}>Undo All</Text>
            </TouchableOpacity>

            <Text
              style={{ fontWeight: "700", fontSize: 18, color: Style.color }}
            >
              Total:
            </Text>

            <TouchableOpacity style={styles.emptyButton}>
              <Text style={styles.emptyButtonText}>Empty</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  notesContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9,
  },
  emptyButton: {
    backgroundColor: Style.color,
    width: "25%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    marginBottom: 5,
  },
  emptyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default DeletedNotes;
