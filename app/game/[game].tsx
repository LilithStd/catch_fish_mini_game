
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ImageStartGame = require("@/assets/images/ui/fishHook.png")

export default function Game() {
    const { game } = useLocalSearchParams();
    const placeId = Array.isArray(game) ? game[0] : game;
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getLocationPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    // state
    // components
    const buttonStartGame = () => {
        return (
            <TouchableOpacity style={GameStyles.buttonStartGame}>
                <Text style={GameStyles.titleText}>Catch!</Text>
                <ImageBackground source={ImageStartGame} style={GameStyles.buttonStartGameImage} />
            </TouchableOpacity>
        )
    }
    // 

    return (
        <SafeAreaView style={GameStyles.mainContainer}>
            <ImageBackground source={getLocationPlaceData(placeId, currentLanguage).images.game} resizeMode="cover" style={GameStyles.imageBackground}>
                <View style={GameStyles.titleContainer}>
                    <Text style={GameStyles.titleText}>{getLocationPlaceData(placeId, currentLanguage).name}</Text>
                </View>
                {buttonStartGame()}
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
    buttonStartGame: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 100,
        position: 'absolute',
        bottom: 200,
        left: 200,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStartGameImage: {
        width: 50,
        height: 50
    },
    fishListContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center'
    },
})

