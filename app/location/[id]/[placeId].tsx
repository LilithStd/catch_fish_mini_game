import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Place() {
    const { id, placeId } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    const placeIdValue = Array.isArray(placeId) ? placeId[0] : placeId;
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    const placeData = getCurrentPlaceData(placeIdValue, currentLanguage)
    const image = require('@/assets/images/locations/full/lake/places/lake_bottom_left.jpg')
    console.log(placeData)
    return (
        <SafeAreaView>
            <ImageBackground source={placeData.imagePlace ? placeData.imagePlace : image} resizeMode="cover">
                <Text>{locationId}</Text>
                <Text>{placeIdValue}</Text>
            </ImageBackground>


        </SafeAreaView>
    )
}
