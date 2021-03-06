import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const BasicModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        useNativeDriver={true} 
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={PaymentModal.centeredView}>
          <View style={PaymentModal.modalView}>
            <Text style={PaymentModal.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...PaymentModal.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={PaymentModal.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={PaymentModal.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <FontAwesome name="edit" size={24} color="black" />
      </TouchableHighlight>
    </View>
  );
};

const PaymentModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#54FA9C",
    borderRadius: 10,
    paddingRight: 22,
    paddingLeft: 25,
    paddingBottom: 12,
    paddingTop: 12,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default BasicModal;