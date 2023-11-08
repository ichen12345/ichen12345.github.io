import Header from './Header';
import AboutMe from './components/AboutMe';
import './App.css';

export default function App () {
    let items = [
        "Interest",
        "Skills",
        "Background"
    ];
    return (
        <div>
            <Header />
            <AboutMe items={items} heading="About Me"/>
        </div>
    );
}