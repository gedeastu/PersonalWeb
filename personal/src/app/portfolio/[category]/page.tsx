import React from 'react'
interface categoryType{
  params: string;
  category: string;
}
const Category: React.FC< categoryType> = ({params}) => {
  return (
    <>
    <h1>{params.category}</h1>
    </>
  )
}

export default Category