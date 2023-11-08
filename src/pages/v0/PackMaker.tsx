type Collection = {
    name: string,
    children: Selectable[]
}
type Selectable = {
    id: string
    name: string
    img?: string
}


export default function () {

    let col: Collection[] = [
        {
            name: "ola",
            children: [
                {
                    id: "tyke",
                    name: "Terra Ore"
                },
                {
                    id: "osta-kt",
                    name: "Orange Planks"
                }, {
                    id: "red-ore",
                    name: "Redstone House"
                }
            ]
        },
        {
            name: "Hell",
            children: [
                {
                    id: "hem",
                    name: "Hell Ore Prcoessor"
                },
                {
                    id: "hek",
                    name: "Hell Planks"
                }, {
                    id: "hell-red",
                    name: "Hallowwer"
                }
            ]
        }
    ]

    return (<div class="p-5 flex flex-col gap-6">
        {col.map((e) =>
            (<div class="flex flex-col gap-4 px-8 py-3 bg-white bg-opacity-5 rounded-3xl ">
                <h1 class="pl-5 text-3xl font-bold font-mono">{e.name}</h1>
                <div class="flex flex-wrap gap-4">{e.children.map(child =>
                    (<div key={child.id} class="flex flex-col items-center">
                        <img src={child.img || "https://vectorified.com/images/default-user-icon-33.jpg"}
                             alt={`${child.name} icon`} class="w-16 "/>
                        <h3 class="font-semibold text-lg">{child.name}</h3>
                        text
                    </div>))}
                </div>
            </div>)
        )
        }
    </div>)
}