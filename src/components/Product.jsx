import React from 'react' 
import { CartState } from '../context/context' 
import {Container, Row} from 'react-bootstrap'
import SingleProduct from './SingleProduct'

const Product = () => {  

    const {state: {products}} = CartState() 

 


    return (
        <Container>
           <Row>
            {
                products.map((product) => {
                    return <SingleProduct product={product} key={product.id}/>
                })
            }
           </Row>
        </Container>
    )
}


export default Product