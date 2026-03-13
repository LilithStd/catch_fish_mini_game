import { useGlobalStore } from "@/store/global/globalStore";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Encyclopedia() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    return (
        <SafeAreaView>
            <Text>Fish Encyclopedia</Text>
        </SafeAreaView>
    )
}
