const dataCategories: Category[] = [
    {
        name: "Ola",
        id: "ola",
        children: [
            // @ts-ignore
            {id: "tyke", version: "1.0.0", name: "Terra Ore"},
            // @ts-ignore
            {id: "osta-kt", version: "1.0.0", name: "Orange Planks"},
            // @ts-ignore
            {id: "red-ore", version: "1.0.0", name: "Redstone House"}
        ]
    },
    {
        name: "Hell",
        id: "hell",
        children: [
            // @ts-ignore
            {id: "hem", version: "1.0.0", name: "Hell Ore Prcoessor"},
            // @ts-ignore
            {id: "hek", version: "1.0.0", name: "Hell Planks"},
            // @ts-ignore
            {id: "hell-red", version: "1.0.0", name: "Hallowwer"}
        ]
    }
]

type CategoriesData = { name: string, id: string, sub: boolean, parent?: string }
const dataCategoriesTABLE: CategoriesData[] = [
    {name: "Ola", id: "ola", sub: false},
    {name: "Hell", id: "hell", sub: false}
];

type PacksData = { id: string, name: string, category: string, img?: string }
const dataPacksTABLE: PacksData[] = [
    {id: "tyke", name: "Terra Ore", category: "ola", img: ":)"},
    {id: "osta-kt", name: "Orange Planks", category: "ola", img: ":)"},
    {id: "red-ore", name: "Redstone House", category: "ola", img: ":)"},
    {id: "hem", name: "Hell Ore Prcoessor", category: "hell", img: ":)"},
    {id: "hek", name: "Hell Planks", category: "hell", img: ":)"},
    {id: "hell-red", name: "Hallowwer", category: "hell"}
]

type PackVersion = { id: string, version: string, gameVersions: string[], link: string }
const dataPacksVersionsTABLE: PackVersion[] = [
    {id: "tyke", version: "1.0.0", gameVersions: ["1.20", "1.19", "1.18"], link: ":)"},
    {id: "osta-kt", version: "1.0.0", gameVersions: ["1.20", "1.19", "1.18"], link: ":)"},
    {id: "red-ore", version: "1.0.0", gameVersions: ["1.20", "1.19", "1.18"], link: ":)"},
    {id: "hem", version: "1.0.0", gameVersions: ["1.20", "1.19", "1.18"], link: ":)"},
    {id: "hek", version: "1.0.0", gameVersions: ["1.20", "1.19"], link: ":)"},
    {id: "hell-red", version: "1.0.0", gameVersions: ["1.20", "1.19"], link: ":)"},
]


export {dataCategories, dataCategoriesTABLE, dataPacksTABLE, dataPacksVersionsTABLE}