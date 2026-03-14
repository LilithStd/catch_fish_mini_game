import { languageSwitcherContent } from "@/adaptiveContent/globalComponentsContent/languageSwitcherContent";
import { LanguageEnum } from "@/constants/global/enum";
import { useGlobalStore } from "@/store/global/globalStore";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function LanguageSwitcher() {

    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguage)
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const LanguagesList = languageSwitcherContent.languageSwitcherList

    const renderLanguageItem = ({ item }: { item: { id: LanguageEnum; name: string } }) => {
        return (
            <TouchableOpacity
                style={[
                    LanguageSwitcherStyles.languageItem,
                    currentLanguage === item.id && LanguageSwitcherStyles.selectedLanguageItem
                ]}
                onPress={() => setCurrentLanguage(item.id)}
            >
                <Text style={LanguageSwitcherStyles.languageItemText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={LanguageSwitcherStyles.mainContainer}>
            <View style={LanguageSwitcherStyles.subContainer}>
                <Text>{languageSwitcherContent.languageSwitcherTitle[currentLanguage].title}</Text>
                <FlatList
                    data={LanguagesList}
                    renderItem={renderLanguageItem}
                    keyExtractor={(item) => item.id}
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
    languageItemText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    selectedLanguageItem: {
        backgroundColor: "orange",
    },
})