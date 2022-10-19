import React from 'react' 
import {Navbar, Nav, Container, Offcanvas, Badge} from 'react-bootstrap' 
import {FaShoppingCart} from 'react-icons/fa' 
import '../styles.css' 
import { CartState } from '../context/context'
import {AiFillDelete} from 'react-icons/ai' 



 
function Header() { 

const [show, setShow] = React.useState(false) 

const display = () => setShow(true) 
const handleClose = () => setShow(false) 

const {state: {cart}, dispatch} = CartState() 



  return (
    <div>
        <Navbar  className="navbar" bg="secondary">
            <Container>
            <Navbar.Brand className="text-light">Munashe Store</Navbar.Brand> 

               <Nav> 
                <span className="add_to_cart">
                <Badge bg="secondary">{cart.length}</Badge>
                 <FaShoppingCart   
                 onClick={display}
                  size={30} color="white"/>
                </span>
               </Nav> 
            </Container> 

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {cart.length === 0 ? 'your cart is empty': 'your products below'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> 
          {
          cart.map((item) => {
            return (
              <div key={item.id}>
               <div className="cart_product_details">
                <img src={item.image} alt={item.name} className="image_cart"/> 
                <h3 style={{marginTop: 45}}>{item.name}</h3> 
                <AiFillDelete color="red" size={30}  
                style={{marginTop: 45, marginLeft: 34}} 
                onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item
                })}
                />
               </div> 
              </div>
            )
          })
          }
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar>
    </div>
  )
}

export default Header