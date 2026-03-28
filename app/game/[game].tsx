
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ImageStartGame = require("@/assets/images/ui/fishHook.png")
const FloatItemImage = require("@/assets/images/ui/floatItemGame.png")
const GameImageFull = require("@/assets/images/locations/full/lake/game/original_game_screen.png")
const GameImageFull2 = require("@/assets/images/locations/full/lake/game/original_game_screen_half.png")

export default function Game() {
    const { game } = useLocalSearchParams();
    const placeId = Array.isArray(game) ? game[0] : game;
    // consts
    const catchingDuration = 3000
    const catchingAnimationAmplitude = 10

    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getLocationPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    // state
    const [gameStarted, setGameStarted] = useState(false)
    const [isCatching, setIsCatching] = useState(false)
    // functions

    const startGame = () => {
        setGameStarted(true)
    }
    const stopCatching = () => {

        setIsCatching(false)
        setGameStarted(false)
        console.log("Game stopped")
    }
    const startCatching = () => {
        setIsCatching(true)
    }
    const anim = useRef(new Animated.Value(0)).current;
    // effects
    // catching animation
    useEffect(() => {
        if (!gameStarted) return;

        let isMounted = true;

        const loop = () => {
            const randomDelay = Math.random() * 5000 + 2000;

            setTimeout(() => {
                if (!isMounted) return;

                setIsCatching(true);

                setTimeout(() => {
                    setIsCatching(false);
                    loop(); // 🔥 запускаем заново
                }, catchingDuration);

            }, randomDelay);
        };

        loop();
        return () => {
            isMounted = false;
        };
    }, [gameStarted]);
    useEffect(() => {
        if (!isCatching) return;

        // поклёвка длится ограниченное время
        const timeout = setTimeout(() => {
            setIsCatching(false);
        }, catchingDuration);

        return () => clearTimeout(timeout);
    }, [isCatching]);
    // animation floatElement
    useEffect(() => {
        const animate = () => {
            Animated.sequence([
                Animated.timing(anim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]).start(animate);
        };

        animate();
    }, [gameStarted]);

    const translateY = anim.interpolate({
        inputRange: [0, Math.PI, 2 * Math.PI],
        outputRange: [-1, 1, -1], // 🔥 замкнутый цикл
    });

    const moveY = translateY.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 10],
    });

    const biteY = isCatching ? 20 : moveY;
    // components
    const buttonStartGame = () => {
        return (
            <TouchableOpacity style={GameStyles.buttonStartGame} onPress={startGame}>
                <Text style={GameStyles.titleText}>Catch!</Text>
                <ImageBackground source={ImageStartGame} style={GameStyles.buttonStartGameImage} />
            </TouchableOpacity>
        )
    }
    // 
    const gameComponent = () => {
        return (
            <View style={GameStyles.mainContainer}>
                <ImageBackground source={GameImageFull} resizeMode="cover" style={GameStyles.imageBackground}>
                    <Animated.View style={{ transform: [{ translateY: isCatching ? 20 : moveY },] }}>
                        <Image source={FloatItemImage} style={GameStyles.floatItemImage} />
                    </Animated.View>

                    {isCatching && (
                        <Pressable onPress={startCatching} style={{ position: "absolute", top: 100, left: 150, width: 100, height: 100, zIndex: 1000 }} >
                            <Text>Catch!</Text>
                        </Pressable>
                    )}
                    <Image source={GameImageFull2} style={GameStyles.imageMask} />
                    <Pressable onPress={stopCatching} style={{ position: "absolute", bottom: 50, left: 150, backgroundColor: "rgba(255, 255, 255, 0.8)", padding: 10, borderRadius: 100, zIndex: 1000 }}>
                        <Text style={GameStyles.titleText}>Stop Catching</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        )
    }

    return (
        <SafeAreaView style={GameStyles.mainContainer}>
            <ImageBackground source={getLocationPlaceData(placeId, currentLanguage).images.game} resizeMode="cover" style={GameStyles.imageBackground}>

                <View style={GameStyles.titleContainer}>
                    <Text style={GameStyles.titleText}>{getLocationPlaceData(placeId, currentLanguage).name}</Text>
                </View>
                {gameStarted ? gameComponent() : buttonStartGame()}
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
    floatItemImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 310,
        left: 150
    },
    imageMask: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10
    }
})

