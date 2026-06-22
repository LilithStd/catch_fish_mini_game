import { encyclopediaAdaptiveContent } from "@/adaptiveContent/encyclopediaAdaptiveContent/encyclopediaAdaptiveContent";
import { useEncyclopediaStore } from "@/store/encyclopedia/encyclopediaStore";
import { useGlobalStore } from "@/store/global/globalStore";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Encyclopedia() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const encyclopediaData = useEncyclopediaStore((state) => state.encyclopediaData)
    return (
        <SafeAreaView style={EncyclopediaStyles.mainContainer}>
            <View style={EncyclopediaStyles.contentContainer}>
                <Text>{encyclopediaAdaptiveContent[currentLanguage].encyclopediaTitle}</Text>
                <Text>{encyclopediaAdaptiveContent[currentLanguage].encyclopediaDescription}</Text>
                <View>
                <Text>Fish List:</Text>
                <FlatList
                    data={encyclopediaData.fish[currentLanguage]}
                    keyExtractor={(item) => item.id}
                    style={EncyclopediaStyles.fishItemContainer}
                    renderItem={({ item }) => (
                        <View style={EncyclopediaStyles.fishItemContainer}>
                            <Text>Name: {item.name}</Text>
                            <Text>Type: {item.type}</Text>
                            <Text>Description: {item.description}</Text>
                            <Image source={item.preview} style={{ width: 100, height: 40 }} />
                        </View>
                    )}
                />
            </View>
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
        padding: 20,
        backgroundColor: "grey",
    },
    fishItemContainer: {
        padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
    },
})