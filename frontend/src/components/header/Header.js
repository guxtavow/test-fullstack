import './Header.css'
import LogoUOL from './UOL_logo.png'

export default function Header() {
    return (
        <div className="Header-site">  
            <img src={LogoUOL} alt="Logo da UOL" style={{
                width: '8vw',
                height: '10vh'
            }}/>
        </div>
    )
}