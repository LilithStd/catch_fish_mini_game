import { useGlobalStore } from "@/store/global/globalStore";
import { useLocationStore } from "@/store/location/locationStore";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// interface SelectedLocationProps {
//     id: string
// }

export default function SelectedLocation() {
    const { id } = useLocalSearchParams();
    const locationId = Array.isArray(id) ? id[0] : id;
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const getCurrentLocationData = useLocationStore((state) => state.getCurrentLocationData)
    const locationData = getCurrentLocationData(locationId, currentLanguage)
    console.log("locationData", locationData)
    return (
        <SafeAreaView>
            <Text>Selected Location: {locationData.name}</Text>
        </SafeAreaView>
    )
}
