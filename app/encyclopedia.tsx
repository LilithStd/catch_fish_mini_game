import { encyclopediaAdaptiveContent } from "@/adaptiveContent/encyclopediaAdaptiveContent/encyclopediaAdaptiveContent";
import { useEncyclopediaStore } from "@/store/encyclopedia/encyclopediaStore";
import { useGlobalStore } from "@/store/global/globalStore";
import { BlurView } from 'expo-blur';
import { useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const backgroundEncyclopediaImage = require("@/assets/images/encyclopedia/full/underwater_fish.jpg");

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
            <ImageBackground source={backgroundEncyclopediaImage} blurRadius={0} style={EncyclopediaStyles.imageBackground} resizeMode="cover">
                <View style={EncyclopediaStyles.contentContainer}>
                    <Text>{encyclopediaAdaptiveContent[currentLanguage].encyclopediaTitle}</Text>
                    <Text>{encyclopediaAdaptiveContent[currentLanguage].encyclopediaDescription}</Text>
                    <View>
                    <Text>Fish List:</Text>
                    <FlatList
                        data={encyclopediaData.fish[currentLanguage]}
                        keyExtractor={(item) => item.id}
                        style={{}}
                        renderItem={({ item }) => (
                            <View style={[EncyclopediaStyles.fishItemContainer, openElementId?.includes(item.id) && EncyclopediaStyles.fishItemActive]}>
                                <BlurView
                                        intensity={50}
                                     
                                          style={{
                                            padding:5
                                        }}

                                    >
                                    <Pressable onPress={() => toggleElement(item.id)}>
                                    <Text>Name: {item.name}</Text>
                                    </Pressable>
                                    {openElementId?.includes(item.id) && (
                                        <Pressable onPress={() => toggleElement(item.id)}>
                                            <Text>Type: {item.type}</Text>
                                            <Text>Description: {item.description}</Text>
                                            <Text>Type: {item.type}</Text>
                                            <Image source={item.image} style={{ width: 340, height: 220, }} resizeMode="contain"/>
                                        </Pressable>
                                    )}
                                  
                                        
                                    </BlurView>
                            </View>
                        )}
                    />
                </View>
                </View>
            </ImageBackground>
            
            
        </SafeAreaView>
    )
}

export const EncyclopediaStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer:{
        
        flex: 1,
        backgroundColor: "transparent",
        paddingBottom: 100,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 50,
        padding: 30,
    },
    fishItemContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.21)",
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
        marginTop: 10,
    },
    fishItemActive:{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    }
})