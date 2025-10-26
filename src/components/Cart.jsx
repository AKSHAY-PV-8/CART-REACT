import { useCart } from "../context/CartContest"

const Cart = () => {

    const {state, dispatch} = useCart()
    const total = state.cart.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div>
        <h1>Cart</h1>
        {state.cart.length === 0 && <p> cart is empty </p>}

        {state.cart.map(item => (
            <div className="" key={item.id}>
                <div className="inline">{item.name}</div>
                <button className="inline bg-black text-white rounded-[5px] ml-2.5" onClick={() => dispatch({type: "REMOVE", items:item.id})}>REMOVE</button>
            </div>
        ))}

        <div className="mt-5 font-medium">TOTAL: {total}</div>
      
    </div>
  )
}

export default Cart
