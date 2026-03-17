
import { locationAdaptiveContent } from '@/adaptiveContent/locationContent/locationAdaptiveContent'
import { LanguageEnum } from '@/constants/global/enum'
import { LocationAdaptiveContentType, LocationsItemsType, PlaceAdaptiveContentType } from '@/constants/types/locationDataTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface LocationStoreInterface {
  currentLocation: string
  locationData: LocationAdaptiveContentType
  setCurrentLocation: (location: string) => void
  getCurrentPlaceData: (id: string, locale: LanguageEnum) => PlaceAdaptiveContentType
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
      getCurrentPlaceData: (id, locale) => {
        const locationList = get().locationData[locale].locationsList

        const place = locationList
          .flatMap(location => location.listAvaliblePlaces)
          .find(place => place.id === id)

        if (!place) {
          throw new Error("Place not found")
        }

        return place
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