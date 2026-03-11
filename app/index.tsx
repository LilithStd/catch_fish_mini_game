import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>

      <Text>Edit app/index.tsx to edit this screen2.</Text>
    </View>
  );
}

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
