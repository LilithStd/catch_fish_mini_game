
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Game() {
    const { game } = useLocalSearchParams();
    console.log("game screen id: ", game)
    return (
        <SafeAreaView>
            <Text>game screen</Text>
        </SafeAreaView>
    )
}
