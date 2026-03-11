import { LanguageEnum } from '@/constants/global/enum'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface GlobalStoreInterface {
  currentLanguage: LanguageEnum
  setCurrentLanguage: (language: LanguageEnum) => void
}

export const useGlobalStore = create<GlobalStoreInterface>()(
  persist(
    (set,get) => ({
      currentLanguage: LanguageEnum.EN,
      setCurrentLanguage: (language: LanguageEnum) => { 
        if (language !== get().currentLanguage) {
          set({ currentLanguage: language })
        }
      },
    }),
    {
      name: "global-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
)