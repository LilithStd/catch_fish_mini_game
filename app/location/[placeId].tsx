import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";


export default function Place() {
    const { id } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentLocationData = useLocationStore((state) => state.getCurrentLocationData)
    return (
        <View>
            <Text>{locationId}</Text>
        </View>
    )
}
