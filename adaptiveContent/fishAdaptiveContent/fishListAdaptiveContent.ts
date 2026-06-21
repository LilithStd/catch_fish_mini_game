
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

const fishIds = {
    pike: 'pike',
    perch: 'perch',
    pikeperch: 'pikeperch',
    salmon: 'salmon',
    roach: 'roach',
    carp: 'carp',
    trout: 'trout',
    bream: 'bream'
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
    pikeperch: {
        image: require("@/assets/images/fish/Pikeperch.jpg"),
        preview: require("@/assets/images/fish/pikePerchWithoutBGPreview.png")
    },
    salmon: {
        image: require("@/assets/images/fish/Salmon.jpg"),
        preview: require("@/assets/images/fish/salmonWithoutBGPreview.png")
    },
    roach: {
        image: require("@/assets/images/fish/Roach.jpg"),
        preview: require("@/assets/images/fish/roachWithoutBGPreview.png")
    },
    carp: {
        image: require("@/assets/images/fish/Carp.jpg"),
        preview: require("@/assets/images/fish/carpWithoutBGPreview.png")
    },
    trout: {
        image: require("@/assets/images/fish/Trout.jpg"),
        preview: require("@/assets/images/fish/troutWithoutBGPreview.png")
    },
    bream: {
        image: require("@/assets/images/fish/Bream.jpg"),
        preview: require("@/assets/images/fish/breamWithoutBGPreview.png")
    },
}


export const fishListAdaptiveContent = {
    en:{
        pike:{ 
            id: fishIds.pike,
            name: "Pike",
            type: typesOfFish.en.predator,
            description: "The pike is a carnivorous fish that is known for its elongated body and sharp teeth. It is a popular game fish and can be found in freshwater habitats across the Northern Hemisphere.",
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        perch: { 
            id: fishIds.perch,
            name: "Perch",
            type: typesOfFish.en.predator,
            description: "The perch is a freshwater fish known for its distinctive stripes and spiny fins. It is a popular target for anglers due to its aggressive nature and tasty flesh.",
            image: fishImages.perch.image,
            preview: fishImages.perch.preview

        },
        pikeperch: { 
            id: fishIds.pikeperch,
            name: "Pikeperch",
            type: typesOfFish.en.predator,
            description: "The pikeperch is a predatory fish found in freshwater lakes and rivers. It is known for its elongated body and sharp teeth, making it a formidable hunter.",
            image: fishImages.pikeperch.image,
            preview: fishImages.pikeperch.preview

        },
        salmon: { 
            id: fishIds.salmon,
            name: "Salmon",
            type: typesOfFish.en.predator,
            description: "The salmon is a migratory fish known for its remarkable journey from freshwater to the ocean and back. It is highly valued for its taste and nutritional benefits.",
            image: fishImages.salmon.image,
            preview: fishImages.salmon.preview
        },
        roach: { 
            id: fishIds.roach,
            name: "Roach",
            type: typesOfFish.en.omnivorous,
            description: "The roach is a small freshwater fish commonly found in rivers and lakes. It is known for its adaptability and is a popular target for anglers.",
            image: fishImages.roach.image,
            preview: fishImages.roach.preview
        },
        carp: { 
            id: fishIds.carp,
            name: "Carp",
            type: typesOfFish.en.nonPredator,
            description: "The carp is a large freshwater fish known for its strength and resilience. It is a popular target for anglers and is often found in lakes and slow-moving rivers.",
            image: fishImages.carp.image,
            preview: fishImages.carp.preview
        },
        trout: { 
            id: fishIds.trout,
            name: "Trout",
            type: typesOfFish.en.omnivorous,
            description: "The trout is a freshwater fish known for its colorful appearance and delicate flavor. It is a popular choice for anglers and is often found in cold, clear streams and lakes.",
            image: fishImages.trout.image,
            preview: fishImages.trout.preview
        },
        bream: { 
            id: fishIds.bream,
            name: "Bream",
            type: typesOfFish.en.nonPredator,
            description: "The bream is a freshwater fish known for its flat body and silvery scales. It is commonly found in lakes and slow-moving rivers.",
            image: fishImages.bream.image,
            preview: fishImages.bream.preview
        },
    },
    lv:{
        pike:{
            id: fishIds.pike,
            name: "Līdaka",
            type: typesOfFish.lv.predator,
            description: "Līdaka ir plēsīga saldūdens zivs, kas pazīstama ar savu garo ķermeni un asiem zobiem, padarot to par bīstamu mednieku.",
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        perch: {
            id: fishIds.perch,
            name: "Asaris",
            type: typesOfFish.lv.predator,
            description: "Asaris ir saldūdens zivs, kas pazīstama ar savām raksturīgajām svītrām un spīļveida spuru. Tas ir populārs makšķernieku mērķis tā agresīvās dabas un garšīgās gaļas dēļ.",
            image: fishImages.perch.image,
            preview: fishImages.perch.preview
        },
        pikeperch: {
            id: fishIds.pikeperch,
            name: "Salatis",
            type: typesOfFish.lv.predator,
            description: "Salatis ir plēsīga saldūdens zivs, kas pazīstama ar savu garo ķermeni un asiem zobiem. Tas ir populārs makšķernieku mērķis tā spēka un ātruma dēļ.",
            image: fishImages.pikeperch.image,
            preview: fishImages.pikeperch.preview
        },
        salmon: {
            id: fishIds.salmon,
            name: "Lasis",
            type: typesOfFish.lv.predator,
            description: "Lasis ir plēsīga saldūdens zivs, kas pazīstama ar savu garo ķermeni un asiem zobiem. Tas ir populārs makšķernieku mērķis tā spēka un ātruma dēļ.",
            image: fishImages.salmon.image,
            preview: fishImages.salmon.preview
        },
        roach: {
            id: fishIds.roach,
            name: "Reņģe",
            type: typesOfFish.lv.omnivorous,
            description: "Reņģe ir neliela saldūdens zivs, kas bieži sastopama upēs un ezeros. Tā ir pazīstama ar savu pielāgošanās spēju un ir populārs makšķernieku mērķis.",
            image: fishImages.roach.image,
            preview: fishImages.roach.preview
        },
        carp: {
            id: fishIds.carp,
            name: "Karpa",
            type: typesOfFish.lv.nonPredator,
            description: "Karpa ir liela saldūdens zivs, kas pazīstama ar savu spēku un izturību. Tā ir populārs makšķernieku mērķis un bieži sastopama ezeros un lēni tekošās upēs.",
            image: fishImages.carp.image,
            preview: fishImages.carp.preview
        },
        trout: {
            id: fishIds.trout,
            name: "Forele",
            type: typesOfFish.lv.omnivorous,
            description: "Forele ir saldūdens zivs, kas pazīstama ar savu krāsaino izskatu un smalko garšu. Tā ir populāra makšķernieku izvēle un bieži sastopama aukstos, skaidros strautos un ezeros.",
            image: fishImages.trout.image,
            preview: fishImages.trout.preview
        },
        bream: {
            id: fishIds.bream,
            name: "Plaudis",
            type: typesOfFish.lv.nonPredator,
            description: "Plaudis ir saldūdens zivs, kas pazīstama ar savu plāno ķermeni un sudrabaino zvīņu krāsu. Tā bieži sastopama ezeros un lēni tekošās upēs.",
            image: fishImages.bream.image,
            preview: fishImages.bream.preview
        },
    },
    ru:{
        pike:{
            id: fishIds.pike,
            name: "Щука",
            type: typesOfFish.ru.predator,
            description: "Щука - это хищная пресноводная рыба, известная своим длинным телом и острыми зубами, что делает ее опасным охотником.",
            image: fishImages.pike.image,
            preview: fishImages.pike.preview
        },
        perch: {
            id: fishIds.perch,
            name: "Окунь",
            type: typesOfFish.ru.predator,
            description: "Окунь - это хищная пресноводная рыба, известная своим агрессивным поведением и острыми зубами, что делает его опасным охотником.",
            image: fishImages.perch.image,
            preview: fishImages.perch.preview
        },
        pikeperch: {
            id: fishIds.pikeperch,
            name: "Судак",
            type: typesOfFish.ru.predator,
            description: "Судак - это хищная пресноводная рыба, известная своим длинным телом и острыми зубами, что делает его опасным охотником.",
            image: fishImages.pikeperch.image,
            preview: fishImages.pikeperch.preview
        },
        salmon: {
            id: fishIds.salmon,
            name: "Лосось",
            type: typesOfFish.ru.predator,
            description: "Лосось - это хищная пресноводная рыба, известная своим длинным телом и острыми зубами, что делает его опасным охотником.",
            image: fishImages.salmon.image,
            preview: fishImages.salmon.preview
        },
        roach: {
            id: fishIds.roach,
            name: "Плотва",
            type: typesOfFish.ru.omnivorous,
            description: "Плотва - это всеядная пресноводная рыба, известная своей способностью адаптироваться к различным условиям среды и быть популярной целью для рыболовов.",
            image: fishImages.roach.image,
            preview: fishImages.roach.preview
        },
        carp: {
            id: fishIds.carp,
            name: "Карп",
            type: typesOfFish.ru.nonPredator,
            description: "Карп - это крупная пресноводная рыба, известная своей силой и выносливостью. Она является популярной целью для рыболовов и часто встречается в озерах и медленно текущих реках.",
            image: fishImages.carp.image,
            preview: fishImages.carp.preview
        },
        trout: {
            id: fishIds.trout,
            name: "Форель",
            type: typesOfFish.ru.omnivorous,
            description: "Форель - это пресноводная рыба, известная своим вкусным мясом и красивой окраской. Она часто встречается в холодных, чистых реках и озерах.",
            image: fishImages.trout.image,
            preview: fishImages.trout.preview

        },
        bream: {
            id: fishIds.bream,
            name: "Лещ",
            type: typesOfFish.ru.nonPredator,
            description: "Лещ - это пресноводная рыба, известная своим плоским телом и серебристой окраской. Он часто встречается в озерах и медленно текущих реках.",
            image: fishImages.bream.image,
            preview: fishImages.bream.preview
        },
    }
}