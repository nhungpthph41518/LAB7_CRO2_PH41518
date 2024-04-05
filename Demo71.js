import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "./firebaseConfig";
const AppDemo71 = () => {
  const [text, setText] = useState("");
  //   const [id, setId] = useState("");

  const handleInsert = async () => {
    try {
      const tailieu = await addDoc(collection(FIRESTORE_DB, "SinhViens"), {
        text: text,
      });
      console.log("Tai lieu duoc ghi voi ID = ", tailieu.id);
      setText("");
    } catch (error) {
      console.error("Loi ghi du lieu: ", error);
    }
  };

  return (
    <View>
      {/* <TextInput placeholder="Nhap id" value={id} onChangeText={setId} /> */}
      <TextInput
        placeholder="Nhap ten sinh vien"
        value={text}
        onChangeText={setText}
      />
      <Button title="Them du lieu" onPress={handleInsert} />
    </View>
  );
};

export default AppDemo71;
