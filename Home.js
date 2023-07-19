import React from 'react';
import Header from './Container/Header';
import Table from './Container/Table';
import Image from './Container/Image';
import Card from './Container/Card';



const Home = () => {
  return (
    <div style={{
      backgroundColor: 'pink'}}> 
      
        <Header />
        <Image />
        <Table />
         <Card/>
        
        
        
        
    </div>
  )
}

export default Home