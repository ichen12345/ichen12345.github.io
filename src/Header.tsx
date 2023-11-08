// PascalCasing
export default function Header() {
    // JSX: javaScript XML
    const name = 'Ivy Chen';
    if (name)
        return (
            <>
            <header>
                <h1>My name is {name}</h1>
            </header>
            <img src ="./images/harley.jpg" alt="Ivy's Profile Picture"/>
            </>
        );
    // If name is empty then return Hello all!
    return (
        <header>
                <h1>Hello all!</h1>
        </header>
    );
}