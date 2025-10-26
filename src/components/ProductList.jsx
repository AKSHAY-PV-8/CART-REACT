import { useCart } from "../context/CartContest"

const ProductList = () => {

    const {dispatch} = useCart()

    const products = [
        {name:"TV", amount: 80000, id:1},
        {name:"Phone", amount: 30000, id:2},
        {name:"car", amount: 8000000, id:3},        
    ]
  return (
    <div>
        <h1>PRODUCT LIST</h1>
        {products.map(product => (
            <div className="border-black border w-50 rounded-[10px]" key={product.id}>
                <div className="">{product.name}</div>
                <span className="">PRICE{product.amount}</span>
                <button className="inline bg-black text-white rounded-[5px] ml-6" onClick={() => dispatch({type:"ADD", items:product})}>ADD</button>
            </div>
        ))}
      
    </div>
  )
}

export default ProductList
