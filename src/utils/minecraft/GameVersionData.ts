const v18: MinorVersion[] = [
    {
        version: "1.18.2",
        pack_format: {data: 9, resource: 8}
    },
    {
        version: "1.18.1",
        pack_format: {data: 8, resource: 8}
    }
]
const v19: MinorVersion[] = [
    {
        version: "1.19.4",
        pack_format: {data: 12, resource: 13}
    },
    {
        version: "1.19.3",
        pack_format: {data: 10, resource: 12}
    },
    {
        version: "1.19.2",
        pack_format: {data: 10, resource: 9}
    },
    {
        version: "1.19.1",
        pack_format: {data: 10, resource: 9}
    }]
const v20: MinorVersion[] = [
    {
        version: "1.20.3",
        pack_format: {data: 26, resource: 22}
    },
    {
        version: "1.20.2",
        pack_format: {data: 18, resource: 18}
    },
    {
        version: "1.20.1",
        pack_format: {data: 15, resource: 15}
    }]
const v21: MinorVersion[] = []
const AllGameVersions: GameVersion[] = [
    {
        index:0,
        major: "1.18",
        released: true,
        pack_format: {data: 8, resource: 8},
        latest_minor: v18[0],
        minor: v18
    },
    {
        index:1,
        major: "1.19",
        released: true,
        pack_format: {data: 10, resource: 9},
        latest_minor: v19[0],
        minor: v19
    },
    {
        index:2,
        major: "1.20",
        released: true,
        pack_format: {data: 15, resource: 15},
        latest_minor: v20[0],
        minor: v20
    },
    {
        index:3,
        major: "1.21",
        released: false,
        pack_format: {data: 26, resource: 22},
        latest_minor: null,
        minor: v21
    }
]

const LatestVersion = AllGameVersions[2]
const OldestVersion = AllGameVersions[0]
const GameVersions = AllGameVersions.filter(e=> e.released)
export {AllGameVersions,GameVersions, LatestVersion, OldestVersion}