import { fishListAdaptiveContent } from "../fishAdaptiveContent/fishListAdaptiveContent";

export const locationAdaptiveContent = {
    en:{
        mainTitle: "Choose location:",
        locationsList:[
            {
                id: 'lake',
                name: "Lake",
                listAvaliblePlaces: [
                    {
                        id: 'lakePlace1',
                        name: "Place 1",
                        lisFish:[
                            fishListAdaptiveContent.en.pike,
                            fishListAdaptiveContent.en.perch,
                            fishListAdaptiveContent.en.pikeperch,
                        ]
                    },
                    {
                        id: 'lakePlace2',
                        name: "Place 2",
                        lisFish:[
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

}