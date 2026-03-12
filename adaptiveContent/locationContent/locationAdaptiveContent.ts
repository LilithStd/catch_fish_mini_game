import { fishListAdaptiveContent } from "../fishAdaptiveContent/fishListAdaptiveContent";

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


export const locationAdaptiveContent: LocationAdaptiveContentType = {
    en:{
        mainTitle: "Choose location:",
        locationsList:[
            {
                id: 'lake',
                name: "Lake",
                description:'Small lake in forest',
                listFishTypes:[fishListAdaptiveContent.en.pike.name, fishListAdaptiveContent.en.perch.name, fishListAdaptiveContent.en.pikeperch.name, fishListAdaptiveContent.en.roach.name, fishListAdaptiveContent.en.carp.name, fishListAdaptiveContent.en.bream.name, fishListAdaptiveContent.en.perch.name],
                previewImage: require('@/assets/images/locations/preview/LakePreview.jpg'),
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Place 1",
                        listFish:[
                            fishListAdaptiveContent.en.pike,
                            fishListAdaptiveContent.en.perch,
                            fishListAdaptiveContent.en.pikeperch,
                        ]
                    },
                    {
                        id: 'lakePlace2',
                        name: "Place 2",
                        listFish:[
                            fishListAdaptiveContent.en.roach,
                            fishListAdaptiveContent.en.carp,
                            fishListAdaptiveContent.en.bream,
                            fishListAdaptiveContent.en.perch,
                        ]
                    },
                ]
            }
        ]

    },
    lv:{
        mainTitle: "Izvēlieties vietu:",
        locationsList:[
            {
                id: 'lake',
                name: "Ezers",
                description:'Mazs ezers mežā',
                listFishTypes:[fishListAdaptiveContent.lv.pike.name, fishListAdaptiveContent.lv.perch.name, fishListAdaptiveContent.lv.pikeperch.name, fishListAdaptiveContent.lv.roach.name, fishListAdaptiveContent.lv.carp.name, fishListAdaptiveContent.lv.bream.name, fishListAdaptiveContent.lv.perch.name],
                previewImage: require('@/assets/images/locations/preview/LakePreview.jpg'),
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Vieta 1",
                        listFish:[
                            fishListAdaptiveContent.lv.pike,
                            fishListAdaptiveContent.lv.perch,
                            fishListAdaptiveContent.lv.pikeperch,
                        ]
                    },
                    {
                        id: 'lakePlace2',
                        name: "Vieta 2",
                        listFish:[
                            fishListAdaptiveContent.lv.roach,
                            fishListAdaptiveContent.lv.carp,
                            fishListAdaptiveContent.lv.bream,
                            fishListAdaptiveContent.lv.perch,
                        ]
                    },
                ]
            }
        ]
    },
    ru:{
        mainTitle: "Выберите локацию:",
        locationsList:[
            {
                id: 'lake',
                name: "Озеро",
                description:'Небольшое озеро в лесу',
                listFishTypes:[fishListAdaptiveContent.ru.pike.name, fishListAdaptiveContent.ru.perch.name, fishListAdaptiveContent.ru.pikeperch.name, fishListAdaptiveContent.ru.roach.name, fishListAdaptiveContent.ru.carp.name, fishListAdaptiveContent.ru.bream.name, fishListAdaptiveContent.ru.perch.name],
                previewImage: require('@/assets/images/locations/preview/LakePreview.jpg'),
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Место 1",
                        listFish:[
                            fishListAdaptiveContent.ru.pike,
                            fishListAdaptiveContent.ru.perch,
                            fishListAdaptiveContent.ru.pikeperch,
                        ]
                    },
                    {
                        id: 'lakePlace2',
                        name: "Место 2",
                        listFish:[
                            fishListAdaptiveContent.ru.roach,
                            fishListAdaptiveContent.ru.carp,
                            fishListAdaptiveContent.ru.bream,
                            fishListAdaptiveContent.ru.perch,
                        ]
                    },
                ]
            }
        ]
    },

} as const