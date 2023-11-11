// PascalCasing
export default function Header() {
    // JSX: javaScript XML
    const name = 'Ivy Chen';
    if (name)
        return (
            <div className="container-fluid pt-3">
            <header>
                <h1>{name}</h1>
                <p className="text-center">872-400-1052│ivy.x.chen@jpmchase.com│www.linkedin.com/in/ivychensmith│github.com/ichen12345</p>
            </header>
            </div>
        );
    // If name is empty then return Hello all!
    return (
        <header>
                <h1>Hello all!</h1>
        </header>
    );
}