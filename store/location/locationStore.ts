
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface LocationStoreInterface {
  currentLocation: string
  setCurrentLocation: (location: string) => void
}

export const useLocationStore = create<LocationStoreInterface>()(
  persist(
    (set,get) => ({
      currentLocation: '',
      setCurrentLocation: (location) => { 
        if (location !== get().currentLocation) {
          set({ currentLocation: location })
        }
      },
    }),
    {
      name: "location-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
)