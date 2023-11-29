type Category = {
    id: string
    name: string,
    children: PackOption[]
    subCategory?: Category
}
type PackOption = {
    id: string
    version: string
    name: string
    category:string
    img?: string
    url?: string
}
type PackFile = {
    info: PackOption,
    data: Blob
}

type PackDataOption = {
    id: string
    version: string
}

type InfoFile = {
    version: string
    packs: PackDataOption[]
}