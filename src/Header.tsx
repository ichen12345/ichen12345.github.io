import Harley from './images/Harley.jpg';

// PascalCasing
export default function Header() {
    // JSX: javaScript XML
    const name = 'Ivy Chen';
    if (name)
        return (
            <div class="container-fluid pt-3">
            <header>
                <h1>Hello from {name}</h1>
            </header>
            <img src ={Harley}  class="rounded-circle" alt="Ivy's Profile Picture"/>
            </div>
        );
    // If name is empty then return Hello all!
    return (
        <header>
                <h1>Hello all!</h1>
        </header>
    );
}