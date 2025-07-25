import { Link } from 'react-router-dom';
import './MainHeader.css';

export default function MainHeader() {
    return (
        <>
            <ul>
                <li><Link to={'/react-test'}>Home</Link></li>
                <li><Link to={'news'}>News</Link></li>
                <li><Link to={'contact'}>Contact</Link></li>
                <li><Link to={'about'}>About</Link></li>
            </ul>
        </>
    )
}