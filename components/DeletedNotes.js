import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Style from "../assets/styles";

const DeletedNotes = ({ ...props }) => {
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

          <View style={styles.divider} />

          {props.moveToBin.length === 0 ? (
            <View style={styles.emptyNoteContainer}>
              <Text style={styles.emptyNoteText}>Nothing to show Yet!!</Text>
            </View>
          ) : (
            props.moveToBin.map((item, idx) => {
              return (
                <View style={styles.item} key={idx}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.note}>
                      <Text style={styles.index}> {idx + 1}. </Text>
                      <Text style={styles.text}>{item}</Text>
                    </View>

                    <TouchableOpacity>
                      <Text style={styles.delete}>Undo</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.deleteContainer}>
                    <Text>Date: {props.date} </Text>
                      <TouchableOpacity>
                        <Text style={styles.delete}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
  delete: {
    color: Style.color,
    fontWeight: "700",
    fontSize: 15,
  },
  text: {
    fontWeight: "700",
    fontSize: 15,
  },
  index: {
    fontSize: 20,
    fontWeight: "800",
  },
  note: {
    flexDirection: "row",
    alignItems: "baseline",
    width: "75%",
  },
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
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: Style.color,
    marginBottom: 5,
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

export default DeletedNotes;
