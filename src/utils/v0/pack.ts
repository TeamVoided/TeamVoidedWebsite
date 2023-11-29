import { dataCategoriesTABLE, dataPacksTABLE, dataPacksVersionsTABLE} from "../const";
// import {validRange} from "semver";

export function getPacks(packType: PackType, version: GameVersion): Category[] {
    switch (packType) {
        case "data": {
            return fetchDataPacks(version.major)
        }
        case "resource": {
            return []
        }
        case "crafting": {
            return []
        }
        default:
            throw Error(`Unknown PackType! Please Handle : ${packType}`)
    }
}

function fetchDataPacks(version: string): Category[] {
    let versions = dataPacksVersionsTABLE.filter(e => e.gameVersions.includes(version))
    // console.log("Versions: ", versions)
    let category = new Set<string>([])
    let packs: PackOption[] = []
    dataPacksTABLE.forEach((pData) => {
        for (let ver in versions) {
            let vData = versions[ver]
            if (vData.id === pData.id) {
                category.add(pData.category)
                let x = {
                    id: pData.id, version: vData.version, name: pData.name, category: pData.category, url: vData.link,
                }
                packs.push(x)
            }
        }
    })
    // console.log("Packs: ", packs)

    let categories = dataCategoriesTABLE.filter(e => category.has(e.id))
    // console.log("Categories: ", categories)

    let dataOut: Category[] = []
    categories.forEach(cData => {
        dataOut.push({
            id: cData.id,
            name: cData.name,
            children: packs.filter(e => e.category === cData.id),
            subCategory: undefined //TODO
        })
    })
    // console.log("DataOut: ", dataOut)

    return dataOut
}