import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showErrorMsg = cartList.length === 0
      const totalCart = () => {
        let count = 0
        cartList.forEach(element => {
          count += element.price
        })
        return count
      }
      return (
        <>
          <Header />
          {showErrorMsg ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <div className="total-cart">
                  <h1 className="t-heading">
                    Order Total:{' '}
                    <span className="t-span">Rs {totalCart()}/-</span>
                  </h1>
                  <p className="t-para">{cartList.length} items in cart</p>
                  <button type="button" className="t-button">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
