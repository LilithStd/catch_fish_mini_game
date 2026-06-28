import { fishContent } from '@/adaptiveContent/fishAdaptiveContent/fishListAdaptiveContent'
import { LanguageEnum } from '@/constants/global/enum'
import { encyclopediaDataTypes } from '@/constants/types/encyclopediaDataTypes'
import { fishListAdaptiveContentType } from '@/constants/types/fishDataTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface EncyclopediaStoreInterface {
  encyclopediaData:encyclopediaDataTypes,
  getResponseInformation: (language: LanguageEnum) => fishListAdaptiveContentType[]
}

export const useEncyclopediaStore = create<EncyclopediaStoreInterface>()(
  persist(
    (set,get) => ({
        encyclopediaData: {
          fish: fishContent
        },  
        getResponseInformation: (language: LanguageEnum) => {
        return get().encyclopediaData.fish[language]
      },
      }),
    {
      name: "encyclopedia-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
)