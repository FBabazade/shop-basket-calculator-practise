import React from 'react'

function BasketItem({product, item }) {
  return (
    <div>
        {product.title} x {item.amount}
    </div>
  )
}

export default BasketItem