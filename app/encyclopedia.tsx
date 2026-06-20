import { encyclopediaAdaptiveContent } from "@/adaptiveContent/encyclopediaAdaptiveContent/encyclopediaAdaptiveContent";
import { useGlobalStore } from "@/store/global/globalStore";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Encyclopedia() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    return (
        <SafeAreaView style={EncyclopediaStyles.mainContainer}>
            <View style={EncyclopediaStyles.contentContainer}>
                <Text>{encyclopediaAdaptiveContent[currentLanguage].encyclopediaTitle}</Text>
            </View>
        </SafeAreaView>
    )
}

export const EncyclopediaStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer:{
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "green",
    }
})