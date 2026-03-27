import { LocationAdaptiveContentType } from "@/constants/types/locationDataTypes"
import { fishListAdaptiveContent } from "../fishAdaptiveContent/fishListAdaptiveContent"





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
                imageLocation: require('@/assets/images/locations/full/lake/main/lake_full.jpg'),
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Place 1",
                        coordinates: {
                            x:50,
                            y:380
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_bottom_left.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.en.pike,
                            fishListAdaptiveContent.en.perch,
                            fishListAdaptiveContent.en.pikeperch,
                        ],
                    },
                    {
                        id: 'lakePlace2',
                        name: "Place 2",
                        coordinates: {
                            x:50,
                            y:200
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_top_left.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.en.roach,
                            fishListAdaptiveContent.en.carp,
                            fishListAdaptiveContent.en.bream,
                            fishListAdaptiveContent.en.perch,
                        ]
                    },
                    {
                        id: 'lakePlace3',
                        name: "Place 3",
                        coordinates: {
                            x:340,
                            y:690
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_bottom_right.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.en.roach,
                            fishListAdaptiveContent.en.perch,
                        ]
                    },
                    {
                        id: 'lakePlace4',
                        name: "Place 4",
                        coordinates:{
                            x:360,
                            y:280
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_top_right.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.en.roach,
                            fishListAdaptiveContent.en.carp,
                            fishListAdaptiveContent.en.bream,
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
                imageLocation: require('@/assets/images/locations/full/lake/main/lake_full.jpg'),
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Vieta 1",
                        coordinates: {
                            x:50,
                            y:380
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_bottom_left.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.lv.pike,
                            fishListAdaptiveContent.lv.perch,
                            fishListAdaptiveContent.lv.pikeperch,
                        ]
                    },
                    {
                        id: 'lakePlace2',
                        name: "Vieta 2",
                        coordinates: {
                            x:50,
                            y:200
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_top_left.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.lv.roach,
                            fishListAdaptiveContent.lv.carp,
                            fishListAdaptiveContent.lv.bream,
                            fishListAdaptiveContent.lv.perch,
                        ]
                    },
                    {
                        id: 'lakePlace3',
                        name: "Vieta 3",
                        coordinates: {
                            x:340,
                            y:690
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_bottom_right.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.lv.roach,
                            fishListAdaptiveContent.lv.perch,
                        ]
                    },
                    {
                        id: 'lakePlace4',
                        name: "Vieta 4",
                        coordinates:{
                            x:360,
                            y:280
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_top_right.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.lv.roach,
                            fishListAdaptiveContent.lv.carp,
                            fishListAdaptiveContent.lv.bream,
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
                imageLocation: require('@/assets/images/locations/full/lake/main/lake_full.jpg'),
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Место 1",
                        coordinates: {
                            x:50,
                            y:380
                        },
                         images: {
                             place: require('@/assets/images/locations/full/lake/places/lake_bottom_left.jpg'),
                             game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                         },
                        listFish:[
                            fishListAdaptiveContent.ru.pike,
                            fishListAdaptiveContent.ru.perch,
                            fishListAdaptiveContent.ru.pikeperch,
                        ],
                       

                    },
                    {
                        id: 'lakePlace2',
                        name: "Место 2",
                        coordinates: {
                            x:50,
                            y:200
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_top_left.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.ru.roach,
                            fishListAdaptiveContent.ru.carp,
                            fishListAdaptiveContent.ru.bream,
                            fishListAdaptiveContent.ru.perch,
                        ]
                    },
                    {
                        id: 'lakePlace3',
                        name: "Место 3",
                        coordinates: {
                            x:340,
                            y:690
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_bottom_right.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.ru.roach,
                            fishListAdaptiveContent.ru.perch,
                        ]
                    },
                    {
                        id: 'lakePlace4',
                        name: "Место 4",
                        coordinates:{
                            x:360,
                            y:280
                        },
                        images: {
                            place: require('@/assets/images/locations/full/lake/places/lake_top_right.jpg'),
                            game: require('@/assets/images/locations/full/lake/game/lake_game.png')
                        },
                        listFish:[
                            fishListAdaptiveContent.ru.roach,
                            fishListAdaptiveContent.ru.carp,
                            fishListAdaptiveContent.ru.bream,
                        ]
                    }
                ]
            }
        ]
    },

} as const