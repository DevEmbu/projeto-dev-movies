import LogoHeader from '../../assets/DevLogoII.png'

function Header(){

    return(
        <div>    
          <h2>Header</h2>        
            <img src={ LogoHeader } alt='Logo-Devembu' style={{width: 130}} />
          
        </div>
    )
}

export default Header