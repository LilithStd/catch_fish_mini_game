import MapPinSolidIcon from "@/assets/icons/MapPinSolid.svg";
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// interface SelectedLocationProps {
//     id: string
// }

export default function SelectedLocation() {
    const { id } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentLocationData = useLocationStore((state) => state.getCurrentLocationData)
    const locationData = getCurrentLocationData(locationId, currentLanguage)
    // state
    const [selectedMapPin, setSelectedMapPin] = useState<string | null>(null)
    const [isCheckedMapPinInformationPopUp, setIsCheckedMapPinInformationPopUp] = useState(false)
    // functions
    const mapPinsHandler = (x: number, y: number, mapPinId: string) => {
        if (selectedMapPin === mapPinId) {
            setSelectedMapPin(null)
            setIsCheckedMapPinInformationPopUp(false)
            informationPopUpHandler(x, y)
        } else {
            setSelectedMapPin(mapPinId)
            setIsCheckedMapPinInformationPopUp(true)
            informationPopUpHandler(x, y)
        }
    }
    const InformationPopup = ({ x, y }: { x: number, y: number }) => {

        const place = locationData.listAvaliblePlaces.find(
            p => p.coordinates.x === x && p.coordinates.y === y
        )

        if (!place) return null

        return (
            <View
                style={{
                    position: "absolute",
                    top: y + 10,
                    left: x + 10,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    padding: 10,
                    borderRadius: 10
                }}
            >
                <Text style={{ color: "white" }}>{place.name}</Text>
                <Text style={{ color: "white" }}>
                    {place.listFish.map(f => f.name).join(", ")}
                </Text>
            </View>
        )
    }
    const informationPopUpHandler = (x: number, y: number) => {
        return (
            <View>
                <Text style={{ color: "white" }}>Information about place</Text>
                {locationData.listAvaliblePlaces.map(place => {
                    if (place.coordinates.x === x && place.coordinates.y === y) {
                        return (
                            <View key={place.id}>
                                <Text style={{ color: "white" }}>{place.name}</Text>
                                <Text style={{ color: "white" }}>{place.listFish.map(fish => fish.name).join(", ")}</Text>
                            </View>
                        )
                    }
                })}
            </View>
        )
    }
    return (
        <SafeAreaView>
            <ImageBackground source={locationData.imageLocation} style={SelectedLocationStyles.ImageBackground} resizeMode="cover">
                <View style={SelectedLocationStyles.textContainer}>
                    <Text style={{ color: "white" }}>Selected Location: {locationData.name}</Text>
                    <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", textShadowColor: "rgba(0, 0, 0, 0.75)", textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 }}>{locationData.name}</Text>
                </View>

                {locationData.listAvaliblePlaces.map((place) => (
                    <MapPinSolidIcon onPress={() => mapPinsHandler(place.coordinates.x, place.coordinates.y, place.id)} key={place.id} width={50} height={50} fill={selectedMapPin === place.id ? 'red' : 'white'} style={[SelectedLocationStyles.mapPinIcon, { left: place.coordinates.x, top: place.coordinates.y }]} />
                ))}
                {isCheckedMapPinInformationPopUp && locationData.listAvaliblePlaces.map((place) => {
                    if (place.id === selectedMapPin) {
                        return <InformationPopup key={place.id} x={place.coordinates.x} y={place.coordinates.y} />
                    }
                })}

            </ImageBackground>
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
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        top: 20,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    mapPinIcon: {
        position: "absolute",
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
    selectedMapPin: {

    }
})
