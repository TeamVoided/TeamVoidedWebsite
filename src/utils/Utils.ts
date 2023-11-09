export function test() {

    let list2: number[] = []

    console.log(list2)
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function format(obj: Object) {
    return JSON.stringify(obj, null, 2);
}

export function openUrl(url: string) {
    window.open(url, '_self', 'noopener,noreferrer')
}

export function downloadBlob(blob: Blob, name: string) {
    const aTag = window.document.createElement('a');
    let link = URL.createObjectURL(blob);
    aTag.href = link
    aTag.download = name;
    aTag.click();
    URL.revokeObjectURL(link)
}
