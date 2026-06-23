import { encyclopediaAdaptiveContent } from "@/adaptiveContent/encyclopediaAdaptiveContent/encyclopediaAdaptiveContent";
import { useEncyclopediaStore } from "@/store/encyclopedia/encyclopediaStore";
import { useGlobalStore } from "@/store/global/globalStore";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Encyclopedia() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const encyclopediaData = useEncyclopediaStore((state) => state.encyclopediaData)
    const [openElementId, setOpenElementId] = useState<string[] | null>(null)

    const toggleElement = (elementId: string) => {
        if (openElementId?.includes(elementId)) {
            setOpenElementId((prev) => prev?.filter((id) => id !== elementId) || null)
        } else {
            setOpenElementId((prev) => (prev ? [...prev, elementId] : [elementId]))
        }
    }

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
                    renderItem={({ item }) => (
                        <View style={EncyclopediaStyles.fishItemContainer}>
                            <Pressable onPress={() => toggleElement(item.id)}>
                            <Text>Name: {item.name}</Text>
                            </Pressable>
                            {openElementId?.includes(item.id) && (
                                <Pressable onPress={() => toggleElement(item.id)}>
                                    <Text>Type: {item.type}</Text>
                                    <Text>Description: {item.description}</Text>
                                     <Text>Type: {item.type}</Text>
                                    <Image source={item.preview} style={{ width: 100, height: 40 }} />
                                </Pressable>
                            )}
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
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    contentContainer:{
        padding: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
    },
    fishItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
})