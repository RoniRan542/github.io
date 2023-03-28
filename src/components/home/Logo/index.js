import './index.scss'
import LogoR from '../../../assets/images/R-my-logo.png'

const Logo = () => {

   

    return (
        <div className='logo-container'>
            <img src={LogoR} alt='R logo' className='solid-logo' />
           
        </div>
    )
}

export default Logo;