import { useCart } from "../context/CartContest"

export default function Cart() {

  const {state,dispatch} = useCart()
  const {cart} = state

  const total = cart.reduce((sum, item) => sum+(item.amount * item.qty),0)
  return (
    <div className="ml-70">
      <h1>CART</h1>
      {console.log(cart)}

      {cart.map(item => (
        <div className="" key={item.id}>
          <span>.{item.name}</span> - <span>{item.amount}</span> 
          <button onClick={() => dispatch({type:"REMOVE", payload: item.id})}>REMOVE</button>
          <div>Count:{item.qty}</div> <button onClick={() => dispatch({type:"COUNT+", payload: item.id})}>+</button> <button onClick={() => dispatch({type:"COUNT-", payload: item.id})} >-</button>
          <div className="">amount:{item.amount * item.qty}</div>
        </div>
      ))}

                                                
      <div className="font-medium">TOTAL AMOUNT:{total}</div>

      
      
    </div>
  )
}
