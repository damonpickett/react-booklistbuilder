import {  Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
      <Container>
        <div className="nav">
          <h1>BookListBuilder</h1>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/mylist'><li>My Lists</li></Link>
          </ul>
        </div>
      </Container>
  )

  // return (
  //   <div className="nav">
  //     <h1>BookListBuilder</h1>
  //     <ul>
  //       <Link to='/'><li>Home</li></Link>
  //       <Link to='/mylist'><li>My Lists</li></Link>
  //     </ul>
  //   </div>
  // );
}
  
  export default Navigation;