import { GameRoutesEnum } from "@/constants/global/enum";
import { fishListAdaptiveContentType } from "@/constants/types/fishDataTypes";
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { Link, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const StartButtonImage = require("@/assets/images/ui/floatItem.png");

export default function Place() {
    const { id, placeId } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    const placeIdValue = Array.isArray(placeId) ? placeId[0] : placeId;
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    const placeData = getCurrentPlaceData(placeIdValue, currentLanguage)
    // state
    const [openElementId, setOpenElementId] = useState<string | null>(null)
    // 
    // components
    const toggleElement = (elementId: string) => {
        if (openElementId === elementId) {
            setOpenElementId(null)
        } else {
            setOpenElementId(elementId)
        }
    }
    const collapsedDescription = (elements: [], id: string) => {
        return (
            <View style={PlaceStyles.subContainer}>
                <Text>{id}</Text>
                <Pressable onPress={() => toggleElement("description")} style={{ marginTop: 10 }}>
                    <Text>Show More</Text>
                </Pressable>
            </View>
        )
    }
    const fishListRenderItem = ({ item }: { item: fishListAdaptiveContentType }) => {
        return (
            <View style={{ padding: 10 }}>
                <Image source={item.preview} style={[PlaceStyles.image, { width: 100, height: 40 }]} />
                <Text>Name: {item.name}</Text>
                <Text>Type: {item.type}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={PlaceStyles.mainContainer}>
            <ImageBackground source={placeData.images.place} resizeMode="cover" style={PlaceStyles.imageBackground}>
                <View style={PlaceStyles.descriptionContainer}>
                    <Text style={PlaceStyles.titleText}>Location:{locationId}</Text>
                    <Text style={PlaceStyles.titleText}>Place:{placeIdValue}</Text>
                </View>
                <View style={PlaceStyles.fishListContainer}>
                    <Pressable onPress={() => toggleElement("fishList")}>
                        <Text style={PlaceStyles.titleText}>Fish List</Text>
                    </Pressable>
                    {openElementId === "fishList" && (
                        <FlatList
                            data={placeData.listFish}
                            keyExtractor={(item) => item.id}
                            renderItem={fishListRenderItem}
                        />
                    )}
                </View>
                <Pressable style={{ position: "absolute", bottom: 200, left: 200 }}>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: 10, borderRadius: 100 }}>
                        <Link href={`${GameRoutesEnum.GAME}/${placeIdValue}`}>
                            <Image source={StartButtonImage} style={PlaceStyles.image} />
                        </Link>
                    </View>

                </Pressable>

            </ImageBackground>
        </SafeAreaView>
    )
}

const PlaceStyles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    descriptionContainer: {
        position: "absolute",
        top: 20,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
    fishListContainer: {
        position: "absolute",
        top: 200,
        left: 0,
        width: "40%",
        alignSelf: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'cartoonLargeFont',
    },
    subContainer: {
        position: "absolute",
        top: 20,
        alignSelf: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
    imageBackground: {
        flex: 1,
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
    }
})