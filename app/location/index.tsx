
import { locationAdaptiveContent } from "@/adaptiveContent/locationContent/locationAdaptiveContent";
import { GameRoutesEnum } from "@/constants/global/enum";
import { LocationsItemsType } from "@/constants/types/locationDataTypes";
import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { Link } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    ImageBackground, LayoutAnimation, Pressable, StyleSheet, Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const buttonImage = require("@/assets/images/button/orange_button_01(small).png")


export default function Location() {

    // state
    const [openId, setOpenId] = useState<string | null>(null);
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
    const redirectToLocation = (locationName: string) => {
        setCurrentLocation(locationName)

    }
    const renderLocationItem = ({ item }: { item: LocationsItemsType }) => {
        const AdditionalDescription = () => {
            return <View style={LocationStyles.additionalDescriptionContainer}>
                <Text>{item.description}</Text>
                <Text>{item.listFishTypes.join(", ")}</Text>
            </View>
        }
        return (

            <View style={LocationStyles.locationItem}>
                <ImageBackground blurRadius={open ? 2 : 0} source={item.previewImage} imageStyle={{
                    borderRadius: 20,
                }} resizeMode="cover" style={LocationStyles.imageBackground}>
                    <Pressable onPress={() => {
                        toggle();
                        setOpenId(item.id);
                        setCurrentLocation(item.name)
                    }}>
                        <View style={LocationStyles.locationTitleContainer}>
                            <Text style={LocationStyles.locationTitle}>{item.name}</Text>
                            {open && openId === item.id && (
                                <AdditionalDescription />

                            )}
                            {/* <Button title="Choose" onPress={() => setCurrentLocation(item.name)} /> */}
                            <ImageBackground source={buttonImage} style={LocationStyles.buttonImage} resizeMode="contain">
                                <Pressable onPress={() => redirectToLocation(item.name)}>
                                    <Link href={`${GameRoutesEnum.LOCATION}/${item.id}`}>
                                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Choose</Text>
                                    </Link>

                                </Pressable>
                            </ImageBackground>


                        </View>

                    </Pressable>
                </ImageBackground>
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
        padding: 20,
        borderRadius: 10,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 50,
        padding: 30,
    },
    additionalDescriptionContainer: {

        borderRadius: 10,
    },
    buttonImage: {
        width: 182,
        height: 47,
        justifyContent: "center",
        alignItems: "center",
    },
    locationTitle: {
        fontFamily: 'mainFont',
        fontSize: 54,
        color: 'green'
    },
    locationTitleContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
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
        // padding: 10,
        width: '100%',
        flex: 1,
        backgroundColor: "lightgray",
        borderRadius: 20,
    },
});

