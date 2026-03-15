import MapPinSolidIcon from "@/assets/icons/MapPinSolid.svg";
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// interface SelectedLocationProps {
//     id: string
// }

export default function SelectedLocation() {
    const { id } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentLocationData = useLocationStore((state) => state.getCurrentLocationData)
    const locationData = getCurrentLocationData(locationId, currentLanguage)

    return (
        <SafeAreaView>
            <ImageBackground source={locationData.imageLocation} style={SelectedLocationStyles.ImageBackground} resizeMode="cover">
                <MapPinSolidIcon width={50} height={50} fill={'white'} style={[SelectedLocationStyles.mapPinIcon, { left: 50, top: 380 }]} />
                <MapPinSolidIcon width={50} height={50} fill={'white'} style={[SelectedLocationStyles.mapPinIcon, { left: 50, top: 200 }]} />
                <MapPinSolidIcon width={50} height={50} fill={'white'} style={[SelectedLocationStyles.mapPinIcon, { right: 10, bottom: 160 }]} />
                <MapPinSolidIcon width={50} height={50} fill={'white'} style={[SelectedLocationStyles.mapPinIcon, { right: -10, top: 280 }]} />
                <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", textShadowColor: "rgba(0, 0, 0, 0.75)", textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 }}>{locationData.name}</Text>
            </ImageBackground>
            <Text>Selected Location: {locationData.name}</Text>
        </SafeAreaView>
    )
}

export const SelectedLocationStyles = StyleSheet.create({
    mainContainer: {},
    ImageBackground: {
        width: "100%",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    mapPinIcon: {
        position: "absolute",
        transform: [{ translateX: -25 }, { translateY: -25 }],
    }
})
