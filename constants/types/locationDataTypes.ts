export type LocationsItemsType = {
        id: string,
        name: string,
        description: string,
        listFishTypes: string[],
        previewImage: number,
        listAvaliblePlaces: {
            id: string,
            name: string,
            listFish: {
                id: string,
                name: string,
                type: string,
                image: number
            }[]
        }[]
    }

export type LocationAdaptiveContentElementType = {
    mainTitle: string,
    locationsList: LocationsItemsType[]
}



export type LocationAdaptiveContentType = {
    en: LocationAdaptiveContentElementType,
    lv: LocationAdaptiveContentElementType,
    ru: LocationAdaptiveContentElementType,
}