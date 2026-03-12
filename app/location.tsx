import { locationAdaptiveContent } from "@/adaptiveContent/locationContent/locationAdaptiveContent";
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useState } from "react";
import {
    FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Location() {
    // state
    const [openId, setOpenId] = useState(null);
    const [open, setOpen] = useState(false);
    // global state
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const setCurrentLocation = useLocationStore((state) => state.setCurrentLocation)
    const currentLocation = useLocationStore((state) => state.currentLocation)
    // functions
    const toggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open);
    };
    const renderLocationItem = ({ item }: { item: any }) => {
        return (
            <View style={LocationStyles.locationItem}>
                <TouchableOpacity onPress={() => {
                    toggle();
                    setOpenId(item.id);
                    setCurrentLocation(item.name)
                }}>
                    <Text>{item.name}</Text>
                    {open && openId === item.id && <Text>{item.description}</Text>}
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={LocationStyles.container}>
            <Text>{locationAdaptiveContent[currentLanguage].mainTitle}</Text>
            <View style={LocationStyles.locationContainer}>
                <FlatList
                    data={locationAdaptiveContent[currentLanguage].locationsList}
                    renderItem={renderLocationItem}
                    style={LocationStyles.locationItemContainer}
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
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 20,
        borderRadius: 10,
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: '90%',
        flex: 1,
        borderRadius: 20,
        backgroundColor: "rgba(59, 127, 231, 0.8)",
    },
    locationItemContainer: {
        width: '100%',
        padding: 10,
    },
    locationItem: {
        padding: 10,
        width: '100%',
        flex: 1,
        backgroundColor: "lightgray",
        borderRadius: 20,
    },
});

