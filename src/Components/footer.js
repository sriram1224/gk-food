import logo from './log.svg';
import footercss from './footer.css';   

function Footer() {
    return (
      <div className='footer'>
        <img src={logo} alt="Logo" />
        <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
        <ul>
        <li>About</li>
        <li>Careers</li>
        <li>History</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blog</li>
        </ul>
        <div className="icons">
        <i class="fa-brands fa-facebook icon"></i>
        <i class="fa-brands fa-instagram icon"></i>
        <i class="fa-brands fa-twitter icon"></i>
        <i class="fa-brands fa-github icon"></i>
        <i class="fa-solid fa-globe icon"></i>
        </div>
      </div>
    );
  }
  

export default Footer;