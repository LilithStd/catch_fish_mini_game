import { LanguageEnum } from "@/constants/global/enum";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LanguagesList = [LanguageEnum.EN, LanguageEnum.LV, LanguageEnum.RU]

export default function LanguageSwitcher() {
    const renderLanguageItem = ({ item }: { item: LanguageEnum }) => {
        return (
            <View style={LanguageSwitcherStyles.languageItem}>
                <Text>{item}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={LanguageSwitcherStyles.mainContainer}>
            <View style={LanguageSwitcherStyles.subContainer}>
                <Text>Language Switcher</Text>
                <FlatList
                    data={LanguagesList}
                    renderItem={renderLanguageItem}
                    keyExtractor={(item) => item}
                    horizontal
                    style={LanguageSwitcherStyles.listLanguage}
                />
            </View>
        </SafeAreaView>
    )
}

const LanguageSwitcherStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
        borderRadius: 5,
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },
    listLanguage: {
        flex: 1,
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    languageItem: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
        marginHorizontal: 5,
    },
})