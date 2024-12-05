import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Todos from '../components/Todos'
import CreateTodo from '../pages/CreateTodo';

const Layout = () => {
  return (
    <div className=''>
      <Header/>
      <CreateTodo/>
      <div className='flex justify-center'>
        <Todos/>
        </div>
      <Footer/>
    </div>
  )
}

export default Layout
