import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="p-3 m-2 border-[1px] border-black w-[150px]">
    <img
      src={item?.thumbnail}
      alt={item?.title}
      className="w-full h-[150px] object-contain"
    />
    <p>{item.title}</p>
  </div>
  )
}

export default ProductCard
