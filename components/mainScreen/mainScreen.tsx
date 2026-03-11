import { GameRoutesEnum } from "@/constants/global/enum";
import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LanguageSwitcher from "../global/languageSwitcher";


export default function MainScreen() {
    const backgroundImage = require("@/assets/images/mainScreen/badFisherLogo3.jpg");
    const logoImage = require("@/assets/images/mainScreen/logo.png");
    return (
        <SafeAreaView style={MainScreenStyles.mainContainer}>
            <ImageBackground
                contentFit="cover"
                source={backgroundImage}
                style={MainScreenStyles.backgroundImage}>
                <Image source={logoImage} style={MainScreenStyles.logoImage} />
                <View style={MainScreenStyles.subContainer}>
                    <Text style={MainScreenStyles.textTitle}>Main Screen</Text>
                    <TouchableOpacity style={MainScreenStyles.navigateButton}>
                        <Link href={GameRoutesEnum.GAME} >
                            <Text style={MainScreenStyles.navigationButtonText}>Go to Game</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
                    <LanguageSwitcher />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const MainScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    navigateButton: {
        backgroundColor: "blue",
        padding: 10,
        width: '50%',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    navigationButtonText: {
        color: "white",
        fontSize: 16,
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 20,
        borderRadius: 10,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    logoImage: {
        width: 600,
        height: 300,
        position: "absolute",
        top: 10,
        resizeMode: "contain",
    },
})