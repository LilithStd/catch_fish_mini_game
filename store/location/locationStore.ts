
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface LocationStoreInterface {
  currentLocation: string
  locationData: string
  setCurrentLocation: (location: string) => void
  getCurrentLocationData: (id: string) => string
}

export const useLocationStore = create<LocationStoreInterface>()(
  persist(
    (set,get) => ({
      currentLocation: '',
      locationData: '',
      setCurrentLocation: (location) => { 
        if (location !== get().currentLocation) {
          set({ currentLocation: location })
        }
      },
      getCurrentLocationData: (id) => {
        return '';
      },
    }),
    {
      name: "location-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
)