import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default ImageOption;
