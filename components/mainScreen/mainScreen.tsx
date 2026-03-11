import { GameRoutesEnum } from "@/constants/global/enum";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MainScreen() {
    return (
        <SafeAreaView style={MainScreenStyles.mainContainer}>
            <Text>Main Screen</Text>
            <TouchableOpacity style={MainScreenStyles.navigateButton}>
                <Link href={GameRoutesEnum.GAME} >
                    <Text>Go to Game</Text>
                </Link>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const MainScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    navigateButton: {
        backgroundColor: "aqua",
        padding: 10,
        width: '50%',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
})