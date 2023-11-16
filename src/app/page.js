"use client"
import Banner from '@/Components/Banner'
import Header from '@/Components/Header'
import Products from '@/Components/Products'
import React, { useEffect, useState } from 'react'

const Page = ({ products: initialProducts }) => {

  const [fetchedProducts, setFetchedProducts] = useState();

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setFetchedProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [])
  
  return (
    <div className=" bg-gray-100">
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <Products products={fetchedProducts || initialProducts}/>
      </main>
    </div> 
  )
}
export default Page
