import {useState} from "preact/compat";
import CategoryDisplay from "../../components/v0/CategoryDisplay";
import DownloadModal from "../../components/v0/DownloadModal";
import {col} from "../../ts/const";
import {genInfoFile, getPackFile} from "../../ts/v0/FileUtil";


export default function () {
    const [list, setList] = useState<PackOption[]>([])
    const [modal, setModal] = useState(false)

    let selectedVersion = "1.20"

    function addToList(item: PackOption) {
        setList([...list, item])
    }

    function removeFromList(item: PackOption) {
        setList(list.filter(e => e.id !== item.id))
    }

    function download() {
        setModal(true)      // openModal("DataPack")

        let infoFile: InfoFile = genInfoFile(list, selectedVersion)
        let packFiles: Blob[] = []
        list.forEach(async (e) => packFiles.push(await getPackFile(e)))
        console.log(infoFile)
        console.log(packFiles)
        //genDownloadFile(infoFile, packFiles).then((url) => openUrl(url));
    }

    return (
        <>
            <div class="flex gap-2">
                <div class=" w-full p-5 flex flex-col gap-6">
                    {col.map((e) => (<CategoryDisplay data={e} onSelect={addToList} onUnSelect={removeFromList}/>))}
                </div>
                <div class="flex flex-col w-64 gap-5 p-5">
                    <div class="flex flex-col gap-2 bg-white bg-opacity-10 p-3 rounded-xl">
                        <span class="text-lg">Selected Packs:</span>
                        <ul class="bg-bg rounded">
                            {list.map(e => (
                                <li class="p-1">{e.name}</li>
                            ))}
                        </ul>
                    </div>
                    {list.length > 0 &&
                        <button class={`bg-white bg-opacity-5 py-3 text-xl semibold rounded-xl`}
                                onClick={download}>Download
                        </button>
                    }
                </div>
            </div>
            <DownloadModal isOpen={modal} closeModal={() => {
                setModal(false)
            }}/>
        </>)


}

function openUrl(url: string) {
    window.open(url, '_self', 'noopener,noreferrer')
}