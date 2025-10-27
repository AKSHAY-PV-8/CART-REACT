import { useCart } from "../context/CartContest"

export default function ProductList() {

    const {dispatch} = useCart()

    const products = [
        {id:1, name:"pen", amount:5},
        {id:2, name:"book", amount:30},
        {id:3, name:"box", amount:100},
        {id:4, name:"bag", amount:500},

    ]
  return (
    <div>
        <h1>SHOPPING CART</h1>
        {
            products.map(product => (
                <div className="" key={product.id}>
                    <span className="">item: {product.name}</span>
                    <div>amount: {product.amount}</div>
                    <button onClick={() => dispatch({type: "ADD", payload: product})}>ADD TO CART</button>
                </div>
            ))
        }
      
    </div>
  )
}
