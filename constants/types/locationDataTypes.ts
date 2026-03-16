export type LocationsItemsType = {
        id: string,
        name: string,
        description: string,
        listFishTypes: string[],
        previewImage: number,
        imageLocation: number,
        listAvaliblePlaces: {
            id: string,
            name: string,
            imagePlace: number,
            coordinates: {
                x: number,
                y: number
            },
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