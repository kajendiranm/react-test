import { Link } from 'react-router-dom';
import './MainHeader.module.css';

export default function MainHeader() {
    return (
        <>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/news'}>News</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
        </>
    )
}