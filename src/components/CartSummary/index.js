import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const itemsCount = cartList.length
      let totalAmount = 0
      cartList.forEach(eachCartItem => {
        totalAmount += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <div className="cartSummaryContainer">
          <h1>
            Order Total: <span>{`Rs ${totalAmount}/-`}</span>
          </h1>
          <p>
            {itemsCount}{' '}
            {`${itemsCount === 1 ? 'Item in cart' : 'Items in cart'}`}
          </p>
          <a
            href="https://buy.stripe.com/test_fZeg2Ocph1BDdOMcMM"
            target="_blank"
            className="checkoutBtn"
            rel="noreferrer"
          >
            Checkout
          </a>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
