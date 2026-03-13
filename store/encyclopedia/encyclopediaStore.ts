import { LanguageEnum } from '@/constants/global/enum'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface EncyclopediaStoreInterface {
    encyclopediaData:string[]:
  getResponseInformation: (language: LanguageEnum) => void
}

export const useEncyclopediaStore = create<EncyclopediaStoreInterface>()(
  persist(
    (set,get) => ({
        encyclopediaData: [],  
        getResponseInformation: (language: LanguageEnum) => {
        // Implement your logic to get response information based on the language
      },
      }),
    {
      name: "encyclopedia-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
)