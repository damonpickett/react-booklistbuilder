import { Link } from 'react-router-dom'

function Footer() {
    return (
      <div className="footer">
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/mylists'><li>My Lists</li></Link>
        </ul>
      </div>
    );
  }
  
  export default Footer;