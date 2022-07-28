import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback , View ,Keyboard } from "react-native";
import * as Style from "../assets/styles";

const AddNote = () => {
  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} behaviour="padding">
            <TouchableWithoutFeedback  onPress={Keyboard.dismiss} >
                <View style={{padding: 20 , justifyContent: 'space-around'}}>
                    <TextInput  style={[styles.input]} multiline={true} placeholder="Type here..." />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
 
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
   addNoteContainer:{
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
   },
    input:{
        padding: 20,
        paddingTop: 20,
        width: '100%',
        fontSize: 19,
        color: "#000",
        fontWeight: "600",
        opacity: 0.8,
        shadowColor: Style.color,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0 , height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: "#fff",
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        height: 300
    },
    button:{
        backgroundColor: Style.color,
        width: "40%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    buttonText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "700"
    }
})

export default AddNote;
