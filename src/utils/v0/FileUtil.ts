import {BlobReader, BlobWriter, TextReader, ZipWriter} from "@zip.js/zip.js";
import {format} from "../Utils";

export function genInfoFile(packOptions: PackOption[], version: string): InfoFile {
    return {
        version: version,
        packs: [...packOptions.map(e => Object({id: e.id, version: e.version}))]
    }
}

export async function getPackFile(pack: PackOption): Promise<PackFile> {
    let data: Blob
    try {
        data = await fetch(getPackUrl(pack)).then(res => res.blob());
    } catch (e) {
        console.error(e)
    }
    return {info: pack, data}
}

export function getPackUrl(pack: PackOption): string{
    return `/data/${pack.id}/${pack.version}.zip`
}


export function genPackHash(_: PackOption[]):string {
    return crypto.randomUUID().split("-")[0]
}

export async function genDownloadFile(info: InfoFile, packs: PackFile[]): Promise<Blob> {
    const zip = new ZipWriter(new BlobWriter());

    await zip.add(`info.json`, new TextReader(format(info)))
    for (const pack of packs) {
        await zip.add(`${pack.info.name}-${pack.info.version}.zip`, new BlobReader(pack.data));
    }

    return await zip.close();
}