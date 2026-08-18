function Logo() {
    return <strong>로고</strong>
}

function WelcomeText() {
    return <h1>환영합니다.</h1>
}

export default function ComponentsExample() {
    return (
        <header>
            <Logo />
            <WelcomeText />
        </header>
    )
}