type GameVersion = {
    index: int
    major: string
    released: boolean
    pack_format: PackFormat
    latest_minor: MinorVersion
    minor: MinorVersion[]
}
type PackFormat = {
    data: number
    resource: number
}
type MinorVersion = {
    version: string
    pack_format: PackFormat
}

type PackType = "data" | "resource" | "crafting"