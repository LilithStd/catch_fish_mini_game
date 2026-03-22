
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

const fishImages = {
    pike:{
        image: require("@/assets/images/fish/Pike.jpg"),
        preview: require("@/assets/images/fish/pikeWithoutBGPreview.png")
    },
    perch: {
        image: require("@/assets/images/fish/Perch.jpg"),
        preview: require("@/assets/images/fish/perchWithoutBGPreview.png")
    },
    // pikeperch: {
    //     image: require("@/assets/images/fish/Pikeperch.jpg"),
    //     preview: require("@/assets/images/fish/pikeperchWithoutBGPreview.png")
    // },
    // salmon: {
    //     image: require("@/assets/images/fish/Salmon.jpg"),
    //     preview: require("@/assets/images/fish/salmonWithoutBGPreview.png")
    // },
    // roach: {
    //     image: require("@/assets/images/fish/Roach.jpg"),
    //     preview: require("@/assets/images/fish/roachWithoutBGPreview.png")
    // },
    // carp: {
    //     image: require("@/assets/images/fish/Carp.jpg"),
    //     preview: require("@/assets/images/fish/carpWithoutBGPreview.png")
    // },
    // trout: {
    //     image: require("@/assets/images/fish/Trout.jpg"),
    //     preview: require("@/assets/images/fish/troutWithoutBGPreview.png")
    // },
    // bream: {
    //     image: require("@/assets/images/fish/Bream.jpg"),
    //     preview: require("@/assets/images/fish/breamWithoutBGPreview.png")
    // },
}


export const fishListAdaptiveContent = {
    en:{
        pike:{ 
            id: 'pike',
            name: "Pike",
            type: typesOfFish.en.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        perch: { 
            id: 'perch',
            name: "Perch",
            type: typesOfFish.en.predator,
            image: fishImages.perch.image,
            preview: fishImages.perch.preview

        },
        pikeperch: { 
            id: 'pikeperch',
            name: "Pikeperch",
            type: typesOfFish.en.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview

        },
        salmon: { 
            id: 'salmon',
            name: "Salmon",
            type: typesOfFish.en.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        roach: { 
            id: 'roach',
            name: "Roach",
            type: typesOfFish.en.omnivorous,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        carp: { 
            id: 'carp',
            name: "Carp",
            type: typesOfFish.en.nonPredator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        trout: { 
            id: 'trout',
            name: "Trout",
            type: typesOfFish.en.omnivorous,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        bream: { 
            id: 'bream',
            name: "Bream",
            type: typesOfFish.en.nonPredator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
    },
    lv:{
        pike:{
            id: 'pike',
            name: "Līdaka",
            type: typesOfFish.lv.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        perch: {
            id: 'perch',
            name: "Asaris",
            type: typesOfFish.lv.predator,
            image: fishImages.perch.image,
            preview: fishImages.perch.preview
        },
        pikeperch: {
            id: 'pikeperch',
            name: "Salatis",
            type: typesOfFish.lv.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        salmon: {
            id: 'salmon',
            name: "Lasis",
            type: typesOfFish.lv.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        roach: {
            id: 'roach',
            name: "Reņģe",
            type: typesOfFish.lv.omnivorous,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        carp: {
            id: 'carp',
            name: "Karpa",
            type: typesOfFish.lv.nonPredator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        trout: {
            id: 'trout',
            name: "Forele",
            type: typesOfFish.lv.omnivorous,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        bream: {
            id: 'bream',
            name: "Plaudis",
            type: typesOfFish.lv.nonPredator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
    },
    ru:{
        pike:{
            id: 'pike',
            name: "Щука",
            type: typesOfFish.ru.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        perch: {
            id: 'perch',
            name: "Окунь",
            type: typesOfFish.ru.predator,
            image: fishImages.perch.image,
            preview: fishImages.perch.preview
        },
        pikeperch: {
            id: 'pikeperch',
            name: "Судак",
            type: typesOfFish.ru.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        salmon: {
            id: 'salmon',
            name: "Лосось",
            type: typesOfFish.ru.predator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        roach: {
            id: 'roach',
            name: "Плотва",
            type: typesOfFish.ru.omnivorous,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        carp: {
            id: 'carp',
            name: "Карп",
            type: typesOfFish.ru.nonPredator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        trout: {
            id: 'trout',
            name: "Форель",
            type: typesOfFish.ru.omnivorous,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview

        },
        bream: {
            id: 'bream',
            name: "Лещ",
            type: typesOfFish.ru.nonPredator,
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
    }
}