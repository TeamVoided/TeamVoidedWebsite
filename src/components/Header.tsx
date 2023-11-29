export default function Header() {

    return (
        <header class="w-full px-10 py-2 flex-col flex">
            <nav class="w-full flex items-center justify-center gap-16 text-xl">
                <HeaderItem url="" title="Home"/>
                <HeaderItem url="voided-tweaks" title="Voided Tweaks"/>
                <HeaderItem url="test" title="Test"/>
            </nav>
        </header>
    );
}

type HeaderItemProps = {
    url: string
    title: string
}

function HeaderItem({url, title}: HeaderItemProps) {
    return (
        <a href={`/${url}`} class="hover:underline hover:scale-110">{title}</a>
    )
}
