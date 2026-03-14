import { LanguageEnum } from "@/constants/global/enum";

export const languageSwitcherContent = {
    
        languageSwitcherTitle:{
            en:{title: "Select language:"},
            lv:{title: "Izvēlieties valodu:"},
            ru:{title: "Выберите язык:"},
        } ,
        languageSwitcherList: [
            {
                id: LanguageEnum.EN,
                name: "EN",
            },
            {
                id: LanguageEnum.LV,
                name: "LV",
            },
            {
                id: LanguageEnum.RU,
                name: "RU",
            },
        ]
    
}