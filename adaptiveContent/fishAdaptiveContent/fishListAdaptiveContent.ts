export type fishListAdaptiveContentType = {
    id: string,
    name: string,
    type: string,
    image: number
}

export const typesOfFish = {
    en:{
        predator: "Predator",
        nonPredator: "Non-predator",
        omnivorous: "Omnivorous",
    },
    lv:{
        predator: "Plēsējs",
        nonPredator: "Ne-plēsējs",
        omnivorous: "Visēdājs",
    },
    ru:{
        predator: "Хищник",
        nonPredator: "Не-хищник",
        omnivorous: "Всеядный",
    }
}


export const fishListAdaptiveContent = {
    en:{
        pike:{ 
            id: 'pike',
            name: "Pike",
            type: typesOfFish.en.predator,
            image: require("@/assets/images/fish/Pike.jpg")
        },
        perch: { 
            id: 'perch',
            name: "Perch",
            type: typesOfFish.en.predator,
            image: require("@/assets/images/fish/Perch.jpg")
        },
        pikeperch: { 
            id: 'pikeperch',
            name: "Pikeperch",
            type: typesOfFish.en.predator,
            image: require("@/assets/images/fish/Pikeperch.jpg")

        },
        salmon: { 
            id: 'salmon',
            name: "Salmon",
            type: typesOfFish.en.predator,
            image: require("@/assets/images/fish/Salmon.jpg")
        },
        roach: { 
            id: 'roach',
            name: "Roach",
            type: typesOfFish.en.omnivorous,
            image: require("@/assets/images/fish/Roach.jpg")
        },
        carp: { 
            id: 'carp',
            name: "Carp",
            type: typesOfFish.en.nonPredator,
            image: require("@/assets/images/fish/Carp.jpg")
        },
        trout: { 
            id: 'trout',
            name: "Trout",
            type: typesOfFish.en.omnivorous,
            image: require("@/assets/images/fish/Trout.jpg")
        },
        bream: { 
            id: 'bream',
            name: "Bream",
            type: typesOfFish.en.nonPredator,
            image: require("@/assets/images/fish/Bream.jpg")
        },
    },
    lv:{
        pike:{
            id: 'pike',
            name: "Līdaka",
            type: typesOfFish.lv.predator,
            image: require("@/assets/images/fish/Pike.jpg")
        },
        perch: {
            id: 'perch',
            name: "Asaris",
            type: typesOfFish.lv.predator,
            image: require("@/assets/images/fish/Perch.jpg")
        },
        pikeperch: {
            id: 'pikeperch',
            name: "Salatis",
            type: typesOfFish.lv.predator,
            image: require("@/assets/images/fish/Pikeperch.jpg")
        },
        salmon: {
            id: 'salmon',
            name: "Lasis",
            type: typesOfFish.lv.predator,
            image: require("@/assets/images/fish/Salmon.jpg")
        },
        roach: {
            id: 'roach',
            name: "Reņģe",
            type: typesOfFish.lv.omnivorous,
            image: require("@/assets/images/fish/Roach.jpg")
        },
        carp: {
            id: 'carp',
            name: "Karpa",
            type: typesOfFish.lv.nonPredator,
            image: require("@/assets/images/fish/Carp.jpg")
        },
        trout: {
            id: 'trout',
            name: "Forele",
            type: typesOfFish.lv.omnivorous,
            image: require("@/assets/images/fish/Trout.jpg")
        },
        bream: {
            id: 'bream',
            name: "Plaudis",
            type: typesOfFish.lv.nonPredator,
            image: require("@/assets/images/fish/Bream.jpg")
        },
    },
    ru:{
        pike:{
            id: 'pike',
            name: "Щука",
            type: typesOfFish.ru.predator,
            image: require("@/assets/images/fish/Pike.jpg")
        },
        perch: {
            id: 'perch',
            name: "Окунь",
            type: typesOfFish.ru.predator,
            image: require("@/assets/images/fish/Perch.jpg")
        },
        pikeperch: {
            id: 'pikeperch',
            name: "Судак",
            type: typesOfFish.ru.predator,
            image: require("@/assets/images/fish/Pikeperch.jpg")
        },
        salmon: {
            id: 'salmon',
            name: "Лосось",
            type: typesOfFish.ru.predator,
            image: require("@/assets/images/fish/Salmon.jpg")
        },
        roach: {
            id: 'roach',
            name: "Плотва",
            type: typesOfFish.ru.omnivorous,
            image: require("@/assets/images/fish/Roach.jpg")
        },
        carp: {
            id: 'carp',
            name: "Карп",
            type: typesOfFish.ru.nonPredator,
            image: require("@/assets/images/fish/Carp.jpg")
        },
        trout: {
            id: 'trout',
            name: "Форель",
            type: typesOfFish.ru.omnivorous,
            image: require("@/assets/images/fish/Trout.jpg")
        },
        bream: {
            id: 'bream',
            name: "Лещ",
            type: typesOfFish.ru.nonPredator,
            image: require("@/assets/images/fish/Bream.jpg")
        },
    }
}