import React from 'react'
import PropTypes from 'prop-types';
import AdminSidebar from '../../components/Admin/AdminSidebar';
 const AdminLayout = ({children}) => {
  return (
    <div className='flex'>
        <header className='h-screen'>
        <AdminSidebar/>
        </header>
        <main>
            {children}
        </main>

     
    </div>
  )
}


AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout
