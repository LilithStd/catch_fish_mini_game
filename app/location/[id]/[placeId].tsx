import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Place() {
    const { id, placeId } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    const placeIdValue = Array.isArray(placeId) ? placeId[0] : placeId;
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    const placeData = getCurrentPlaceData(placeIdValue, currentLanguage)

    return (
        <SafeAreaView>
            <ImageBackground source={placeData.imagePlace} resizeMode="cover" style={PlaceStyles.imageBackground}>
                <Text>{locationId}</Text>
                <Text>{placeIdValue}</Text>
            </ImageBackground>


        </SafeAreaView>
    )
}

const PlaceStyles = StyleSheet.create({
    mainContainer: {},
    imageBackground: {
        // flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    }
})