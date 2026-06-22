import { fishListAdaptiveContentType } from "./fishDataTypes"

export type encyclopediaDataTypes = {
    fish:{
        en: fishListAdaptiveContentType[], 
        lv: fishListAdaptiveContentType[], 
        ru: fishListAdaptiveContentType[]
    },
}