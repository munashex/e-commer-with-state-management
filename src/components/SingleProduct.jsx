import {Col, Card, Button} from 'react-bootstrap' 
import '../styles.css' 
import { CartState } from '../context/context'

const SingleProduct = ({product}) => {
 
    const {
        state: { cart },
        dispatch,
      } = CartState(); 

      console.log(cart)

    return (
        <Col>  
         <Card style={{ marginTop: 17}} className="card_con">
            <Card.Img variant="top" src={product.image}  
            className="cart_image"
             style={{height: 200, objectFit: "contain"}} 
            />
            <Card.Body className="card_body"> 
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle style={{marginTop: 5}}>${product.prize}</Card.Subtitle>
            </Card.Body>   
              
            {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove 
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
             Add to Cart
            </Button>
          )}
             
         </Card>
         <p></p>
        </Col>
    )
}

export default SingleProduct