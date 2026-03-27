
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Game() {
    const { game } = useLocalSearchParams();
    const placeId = Array.isArray(game) ? game[0] : game;
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getLocationPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    console.log("game screen id: ", getLocationPlaceData(placeId, currentLanguage))
    return (
        <SafeAreaView style={GameStyles.mainContainer}>
            <ImageBackground source={getLocationPlaceData(placeId, currentLanguage).images.game} resizeMode="cover" style={GameStyles.imageBackground}>
                <View style={GameStyles.titleContainer}>
                    <Text style={GameStyles.titleText}>{getLocationPlaceData(placeId, currentLanguage).name}</Text>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const GameStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
    },
    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 5
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    fishListContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain'
    }
})

