import './App.css';
import { useState } from "react";

let allProduct = [
  {
      name: "Fancy Product",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      rating:"⭐⭐⭐",
      price:"$40.00 - $80.00"
},
{      name: "Special Item",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      rating:"⭐⭐⭐⭐",
      price:"$20.00 $18.00"
},
{     name: "Sale Item",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      rating:"⭐⭐⭐⭐⭐",
      price:"$80.00"
},
{     name: "Popular Item",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      rating:"⭐⭐⭐",
      price:"$40.00"
},
{     name: "Sale Item",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      rating:"⭐⭐",
      price:"$80.00"
},
{      name: "Special Item",
       description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
       img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
       rating:"⭐⭐⭐",
       price:"$20.00 $18.00"
 },
 {     name: "Popular Item",
       description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
       img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
       rating:"⭐⭐",
       price:"$40.00"
 },
 {
  name: "Fancy Product",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  rating:"⭐⭐⭐⭐⭐",
  price:"$40.00 - $80.00"
}
]




function App() {
let productList = allProduct

let [cart, setCart] = useState([])

function handleCart(product){
setCart([...cart, product])
}
function handleRemoveCart(product){
  setCart(cart.filter(item => item !== product ));
}

  return (
    <div className="App">
    <NavBar cart={cart} />
   <div className="productApp">
    {productList.map((product, index)=>(
    <Products key={index} index={index} product={product} onAddCart={handleCart} onRemoveCart={handleRemoveCart}/>
    ))}
   </div>
  
    </div>
  );
}

function NavBar({cart}){
  return(
    <div>
    <div className='navBg'>
      <div className='brand'> 
      <h2>Shopping Cart</h2>
      </div>
      <div className='cartBtn'>
      <button className='btn btn-primary '> <i className="bi bi-basket-fill"></i> &nbsp;Card  <span>{cart.length}</span> </button>
      </div>
    </div>
    </div>
  )
}

function Products({product, onAddCart, onRemoveCart}){
let [show, setShow]= useState(true)

  return(
    <div>
      <div className='col-md-3 cd'>
      <div className='card'>
        <img src={product.img} alt={product.name}/>
      <div className='card-body'>
        <h4>{product.name}</h4>
        <div className='p-r-r'>
          <span>{product.price}</span>
          <span>{product.rating}</span>
        </div>
        <p className='pro-desc'>{product.description}</p> 
        <div className='p-btn'>
        {show ? <button className='btn btn-success' onClick={()=>{
          onAddCart(product)
          setShow(!show)}}> Add to Cart</button> : 
          <button className='btn btn-danger' onClick={()=>{
          onRemoveCart(product)
          setShow(!show)
          }}> Remove from Cart </button>
          }        
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App;
