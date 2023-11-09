export function genInfoFile(packOptions: PackOption[], version: string): InfoFile {
    return {
        version: version,
        packs: [...packOptions.map(e => Object({id: e.id, version: e.version}))]
    }
}

export async function getPackFile(pack: PackOption): Promise<Blob> {
    let url = `/data/${pack.id}/${pack.version}.zip`
    let data: Blob
    try {
        data = await fetch(url).then(res => res.blob());
    } catch (e) {
        console.error(e)
    }

    return data
}