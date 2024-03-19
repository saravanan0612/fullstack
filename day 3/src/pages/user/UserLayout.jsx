import React from 'react'
import PropTypes from 'prop-types';
// import Navbar from '../../components/Navbar/Navbar';
import Footer1 from "../../components/Footer";
import Navbar1 from "../../components/header"
const UserLayout =({children})=> {
  return (
    <div className=''>
        <header >
            <Navbar1/>
        </header>  
        <main className='h-full'>
            {children}
         </main>  
         <footer>
             <Footer1/>
        </footer> 
    </div>
  )
}

UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout