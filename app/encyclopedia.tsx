import { encyclopediaAdaptiveContent } from "@/adaptiveContent/encyclopediaAdaptiveContent/encyclopediaAdaptiveContent";
import { useGlobalStore } from "@/store/global/globalStore";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Encyclopedia() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    return (
        <SafeAreaView style={EncyclopediaStyles.mainContainer}>
            <Text>{encyclopediaAdaptiveContent[currentLanguage].encyclopediaTitle}</Text>
        </SafeAreaView>
    )
}

export const EncyclopediaStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})