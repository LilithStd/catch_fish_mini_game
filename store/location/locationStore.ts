
import { locationAdaptiveContent } from '@/adaptiveContent/locationContent/locationAdaptiveContent'
import { LanguageEnum } from '@/constants/global/enum'
import { LocationAdaptiveContentType, LocationsItemsType } from '@/constants/types/locationDataTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface LocationStoreInterface {
  currentLocation: string
  locationData: LocationAdaptiveContentType
  setCurrentLocation: (location: string) => void
  getCurrentLocationData: (id: string, locale: LanguageEnum) => LocationsItemsType
}
  
export const useLocationStore = create<LocationStoreInterface>()(
  persist(
    (set,get) => ({
      currentLocation: '',
      locationData: locationAdaptiveContent,
      setCurrentLocation: (location) => { 
        if (location !== get().currentLocation) {
          set({ currentLocation: location })
        }
      },
      getCurrentLocationData: (id, locale) => {
        const locationList = get().locationData[locale].locationsList
        return locationList.find(location => location.id === id) as LocationsItemsType
      },
    }),
    {
      name: "location-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
)