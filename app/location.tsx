import { locationAdaptiveContent } from "@/adaptiveContent/locationContent/locationAdaptiveContent";
import { useGlobalStore } from "@/store/global/globalStore";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Location() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    // functions
    const renderLocationItem = ({ item }: { item: any }) => {
        return (
            <View style={LocationStyles.locationItem}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={LocationStyles.container}>
            <Text>{locationAdaptiveContent[currentLanguage].mainTitle}</Text>
            <View>
                <FlatList
                    data={locationAdaptiveContent[currentLanguage].locationsList}
                    renderItem={renderLocationItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const LocationStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    locationItem: {
        padding: 10,
        backgroundColor: "lightgray",
        borderRadius: 5,
        marginVertical: 5,
    },
});

