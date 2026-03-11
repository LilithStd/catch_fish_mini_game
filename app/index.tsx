import MainScreen from "@/components/mainScreen/mainScreen";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <MainScreen />
    </SafeAreaView>
  );
}

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
