import { locationAdaptiveContent } from "@/adaptiveContent/locationContent/locationAdaptiveContent";
import { useGlobalStore } from "@/store/global/globalStore";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Location() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    // 
    return (
        <SafeAreaView style={LocationStyles.container}>
            <Text>{locationAdaptiveContent[currentLanguage].mainTitle}</Text>
        </SafeAreaView>
    )
}

const LocationStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

