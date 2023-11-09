type Category = {
    id: string
    name: string,
    children: PackOption[]
}
type PackOption = {
    id: string
    version: string
    name: string
    img?: string
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