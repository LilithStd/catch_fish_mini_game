
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
    const isCatchingFailed = 'you failed to catch the fish try again'
    const catchingAnimationAmplitude = 10
    const enum GAME_MODE_TYPE {
        CATCHING = "catching",
        FISHING = "fishing",
        STOPPED = "stopped",
        CATCHING_FISH = "catching_fish"
    }

    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getLocationPlaceData = useLocationStore((state) => state.getCurrentPlaceData)
    // state
    const [gameType, setGameType] = useState<GAME_MODE_TYPE>(GAME_MODE_TYPE.FISHING)
    const [gameStarted, setGameStarted] = useState(false)
    const [isCatchingFailedState, setIsCatchingFailedState] = useState(false)
    const [isCatchingStatus, setIsCatchingStatus] = useState(false)
    const [isCatching, setIsCatching] = useState(false)

    // functions

    const startGame = () => {
        setGameStarted(true)
    }
    const stopCatching = () => {

        setIsCatchingStatus(false)
        setGameStarted(false)
        setIsCatching(false)
        setGameType(GAME_MODE_TYPE.STOPPED)
        console.log("Game stopped")
    }

    const failedCatching = () => {
        setIsCatchingFailedState(true)
        setGameType(GAME_MODE_TYPE.STOPPED)
        console.log("Catching failed")
    }

    const resetCatchingFailed = () => {
        setIsCatchingFailedState(false);
    }

    const startCatching = () => {
        setGameType(GAME_MODE_TYPE.CATCHING_FISH)
        // setIsCatching(true)
        // setIsCatchingStatus(false)
        console.log("Catching started")
    }
    const anim = useRef(new Animated.Value(0)).current;
    const catchingAnim = useRef(new Animated.Value(0)).current;
    // effects
    // catching animation
    useEffect(() => {
        if (!gameStarted) return;
        if( gameType === GAME_MODE_TYPE.CATCHING) return;
        let isMounted = true;

        const loop = () => {
            const randomDelay = Math.random() * 5000 + 2000;

            setTimeout(() => {
                if (!isMounted) return;

                setGameType(GAME_MODE_TYPE.CATCHING);

                setTimeout(() => {
                    setGameType(GAME_MODE_TYPE.FISHING);
                    loop(); // 🔥 запускаем заново
                }, catchingDuration);

            }, randomDelay);
        };

        loop();
        return () => {
            isMounted = false;
        };
    }, [gameStarted, isCatching]);
    useEffect(() => {
        if (gameType !== GAME_MODE_TYPE.CATCHING) return;

        // поклёвка длится ограниченное время
        const timeout = setTimeout(() => {
            setIsCatchingFailedState(true);
            setGameType(GAME_MODE_TYPE.FISHING);
        }, catchingDuration);

        return () => {
            clearTimeout(timeout);
            setIsCatchingFailedState(false); // сброс состояния при смене gameType
        };
    }, [gameType]);

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
    useEffect(() => {
        if (gameType === GAME_MODE_TYPE.CATCHING) {
            Animated.timing(catchingAnim, {
                toValue: 1,
                duration: catchingDuration,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => {
                catchingAnim.setValue(0);
            });
        } else {
            catchingAnim.stopAnimation();
            catchingAnim.setValue(0);
        }
    }, [gameType]);

    const translateY = anim.interpolate({
        inputRange: [0, Math.PI, 2 * Math.PI],
        outputRange: [-1, 1, -1], // 🔥 замкнутый цикл
    });

    const moveY = translateY.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 10],
    });

    const scaleCatchButton = catchingAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.2, 1],
    });

    const biteY = isCatchingStatus ? 20 : moveY;
    // components
    const buttonStartGame = () => {
        return (
            <TouchableOpacity style={GameStyles.buttonStartGame} onPress={startGame}>
                <Text style={GameStyles.titleText}>Catch!</Text>
                <ImageBackground source={ImageStartGame} style={GameStyles.buttonStartGameImage} />
            </TouchableOpacity>
        )
    }
    const catchingComponent = () => {
        return (
            <View style={GameStyles.mainContainer}>
                <ImageBackground source={GameImageFull} resizeMode="cover" style={GameStyles.imageBackground}>
                    <Animated.View style={{ transform: [{ translateY: biteY },] }}>
                        <Image source={FloatItemImage} style={GameStyles.floatItemImage} />
                    </Animated.View>
                    <Pressable onPress={stopCatching} style={{ position: "absolute", bottom: 50, left: 150, backgroundColor: "rgba(255, 255, 255, 0.8)", padding: 10, borderRadius: 100, zIndex: 1000 }}>
                        <Text style={GameStyles.titleText}>Stop Catching</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        )
    }
    // 
    const gameComponent = () => {
        return (
            <View style={GameStyles.mainContainer}>
                <ImageBackground source={GameImageFull} resizeMode="cover" style={GameStyles.imageBackground}>
                    <Animated.View style={{ transform: [{ translateY: isCatchingStatus ? 20 : moveY },] }}>
                        <Image source={FloatItemImage} style={GameStyles.floatItemImage} />
                    </Animated.View>
                    {isCatchingFailedState && (
                        <View style={{ position: "absolute", bottom: 400, left: 100, backgroundColor: "rgba(255, 0, 0, 0.8)", padding: 20, borderRadius: 10, zIndex: 1000 }}>
                            <Text style={{ color: "white" }}>{isCatchingFailed}</Text>
                        </View>
                    )}
                    {gameType === GAME_MODE_TYPE.CATCHING && (
                        <Animated.View style={{ position: "absolute", bottom: 300, left: 150, backgroundColor: "rgba(255, 255, 255, 0.8)", padding: 30, borderRadius: 100, zIndex: 1000, transform: [{ scale: scaleCatchButton }] }} >
                            <Pressable onPress={startCatching} style={{ padding: 20, borderRadius: 100, backgroundColor: "rgba(255, 0, 0, 0.2)" }}>
                                <Text style={{}}>Catch!</Text>
                            </Pressable>
                        </Animated.View>
                    )}
                    {gameType === GAME_MODE_TYPE.CATCHING_FISH && (
                        catchingComponent()
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

