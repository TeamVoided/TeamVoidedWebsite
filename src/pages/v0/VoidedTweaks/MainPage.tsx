import {useState} from "preact/compat";
import CategoryDisplay from "../../../components/v0/CategoryDisplay";
import DownloadModal from "../../../components/v0/DownloadModal";
import {dataCategories} from "../../../utils/const";
import {genDownloadFile, genInfoFile, genPackHash, getPackFile} from "../../../utils/v0/FileUtil";
import {downloadBlob, sortAlphabet} from "../../../utils/Utils";
import {GameVersions, LatestVersion, OldestVersion} from "../../../utils/minecraft/GameVersionData";
import {StateUpdater} from "preact/hooks";
import {getPacks} from "../../../utils/v0/pack";

// const packPages = ["data-packs", "resource-packs", "crafting-tweaks"]


export default function ({params}) {
    let id = params.id
    const [list, setList] = useState<PackOption[]>([])
    const [modal, setModal] = useState(false)
    const [version, setVersion] = useState<GameVersion>(LatestVersion)
    const [packs, setPacks] = useState<Category[]>(dataCategories)
    const [clear, setClear] = useState(false)

    function changeVersion(ver: GameVersion) {
        setClear(true)
        setVersion(ver)
        setList([])
        setPacks(getPacks("data", ver))
        setTimeout(()=>{setClear(false)}, 50)
    }

    if (id === undefined) id = "main"
   console.log(id)
    function setNextVersion() {
        if (version.major == LatestVersion.major) changeVersion(OldestVersion)
        else changeVersion(GameVersions[version.index + 1])
    }

    function setPreviousVersion() {
        if (version.major == OldestVersion.major) changeVersion(LatestVersion)
        else changeVersion(GameVersions[version.index - 1])
    }

    function addToList(item: PackOption) {
        setList([...list, item].sort((a, b) => sortAlphabet(a.name, b.name)))
    }

    function removeFromList(item: PackOption) {
        setList(list.filter(e => e.id !== item.id))
    }

    function download() {
        setModal(true)      // openModal("DataPack")

        const infoFile: InfoFile = genInfoFile(list, version.major)
        let packFiles: PackFile[] = []
        list.forEach(async (e) => packFiles.push(await getPackFile(e)))

        const hash = genPackHash(list)

        genDownloadFile(infoFile, packFiles).then(data => downloadBlob(data, `VoidedTweaks_${hash}_UNZIPME.zip`));
    }


    /*
    switch (id) {
        case "main":
            return (<div>Main</div>)
        case "data-packs":
            return (<div>dp</div>)
        case "resource-packs":
            return (<div>rp</div>)
        case "crafting-tweaks":
            return (<div>ct</div>)
        default:
            return NotFound()
    }
 */

    return (
        <>
            <div class="flex w-full px-20 items-center justify-center gap-10 text-lg">
                <SubHeaderItem url="data-packs" title="Data"/>
                <SubHeaderItem url="resource-packs" title="Resource"/>
                <SubHeaderItem url="crafting-tweaks" title="Crafting"/>
            </div>
            <div class="flex gap-6 p-8">
                <div class="p-6 flex flex-col gap-4 bg-white bg-opacity-5 w-full rounded-3xl">
                    <div class="p-4 px-6 flex bg-white bg-opacity-10 rounded-3xl justify-between">
                        <h1 class="text-xl font-semibold">Minecraft version</h1>
                        <Versioninator selected={version} setVersion={changeVersion} next={setNextVersion}
                                       previous={setPreviousVersion}/>
                    </div>
                    {packs.map((e) => (<CategoryDisplay data={e} onSelect={addToList} onUnSelect={removeFromList}  clear={clear}/>))}
                </div>
                <div class="flex flex-col w-64 gap-5 p-5">
                    <div class="flex flex-col gap-2 bg-white bg-opacity-10 p-3 rounded-xl">
                        <span class="text-lg">Selected Packs:</span>
                        <ul class="bg-bg rounded">{list.map(e => (
                            <li class="p-1">{e.name}</li>))}</ul>
                    </div>
                    {list.length > 0 &&
                        <button class={`bg-white bg-opacity-5 py-3 text-xl semibold rounded-xl`}
                                onClick={download}>Download</button>
                    }
                </div>
            </div>
            <DownloadModal isOpen={modal} closeModal={() => setModal(false)}/>
        </>)
}
type SubHeaderItemProps = {
    url: string
    title: string
}

function SubHeaderItem({url, title}: SubHeaderItemProps) {
    return (
        <a href={`/voided-tweaks/${url}`} class="hover:underline hover:scale-110">{title}</a>
    )
}

type  VersioninatorProps = {
    setVersion: StateUpdater<GameVersion>
    selected: GameVersion
    next: () => void
    previous: () => void
}

function Versioninator({setVersion, selected, next, previous}: VersioninatorProps) {
    return (
        <div class="flex gap-1 text-center">
            <button class="font-bold text-xl " onClick={() => previous()}>{"<"}</button>
            {GameVersions.map(e => (<VersionDisplay version={e} setVersion={setVersion} selected={selected}/>))}
            <button className="font-bold text-xl" onClick={() => next()}>{">"}</button>
        </div>
    )
}

type  VersionDisplayProps = {
    version: GameVersion
    setVersion: StateUpdater<GameVersion>
    selected: GameVersion
}

function VersionDisplay({version, setVersion, selected}: VersionDisplayProps) {
    let isSelected = selected.major == version.major
    return (
        <button
            class={`cursor-pointer hover:underline ${isSelected ? "text-xl font-bold underline pb-2 pt-1" : "p-1 px-.5"}`}
            onClick={() => !isSelected && setVersion(version)}
        >{version.major}</button>
    )

}
