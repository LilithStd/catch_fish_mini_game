import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// interface SelectedLocationProps {
//     id: string
// }

export default function SelectedLocation() {
    const { id } = useLocalSearchParams();
    return (
        <SafeAreaView>

            <Text>Selected Location: {id}</Text>
        </SafeAreaView>
    )
}
