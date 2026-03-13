import { GameRoutesEnum } from "@/constants/global/enum";
import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LanguageSwitcher from "../global/languageSwitcher";

const backgroundImage = require("@/assets/images/mainScreen/badFisherLogo3.jpg");
const logoImage = require("@/assets/images/mainScreen/logo.png");
const buttonImage = require("@/assets/images/button/orange_button_01(small).png")

export default function MainScreen() {

    return (
        <SafeAreaView style={MainScreenStyles.mainContainer}>
            <ImageBackground
                contentFit="cover"
                source={backgroundImage}
                style={MainScreenStyles.backgroundImage}>
                <Image source={logoImage} style={MainScreenStyles.logoImage} />
                <View style={MainScreenStyles.subContainer}>
                    {/* <Text style={MainScreenStyles.textTitle}>Main Screen</Text> */}
                    <ImageBackground source={buttonImage} style={MainScreenStyles.buttonImage}>
                        <TouchableOpacity style={MainScreenStyles.navigateButton}>
                            <Link href={GameRoutesEnum.LOCATION} style={MainScreenStyles.buttonImageContainer}>
                                <Text style={MainScreenStyles.navigationButtonText}>GO TO FISHING!</Text>
                            </Link>
                        </TouchableOpacity>
                    </ImageBackground>
                    <ImageBackground source={buttonImage} style={MainScreenStyles.buttonImage}>
                        <TouchableOpacity style={MainScreenStyles.navigateButton}>
                            <Link href={GameRoutesEnum.ENCYCLOPEDIA} style={MainScreenStyles.buttonImageContainer}>
                                <Text style={MainScreenStyles.navigationButtonText}>ENCYCLOPEDIA</Text>
                            </Link>
                        </TouchableOpacity>
                    </ImageBackground>
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
        fontFamily: "mainFont",
        fontWeight: "bold",
    },
    navigateButton: {
        // backgroundColor: "blue",
        // padding: 10,
        // width: '50%',
        // alignItems: "center",
        // justifyContent: "center",
        // borderRadius: 5,
        // marginTop: 20,
    },
    navigationButtonText: {
        // color: "white",
        // fontFamily: "",
        fontWeight: "bold",
        fontSize: 16,
    },
    subContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
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
    buttonImageContainer: {
        // justifyContent: "center",
        // alignItems: "center",
    },
    buttonImage: {
        width: 182,
        height: 47,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
    },
})