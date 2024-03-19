import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LazySuspense from './components/LazySuspense';
const LazyLogin = lazy(() => import("./pages/Auth/Login"));
const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const LazyUserDetails = lazy(()=>import("./pages/Admin/UserDetails"))
const LazyDashboard = lazy(()=>import("./pages/Admin/Dashboard"))
const LazyRegister = lazy(()=>import("./pages/Auth/Register"))
const LazyRecharge = lazy(()=>import("../src/pages/user/Recharge"))
const UserRoutes =()=> (
  <LazyUserLayout>
    <Routes>
      <Route path='/home' element={<LazySuspense component={LazyHome}/>}/>
      <Route path='/recharge' element={<LazySuspense component={LazyRecharge}/>}/>
    </Routes>
  </LazyUserLayout>
)

const AdminRoutes =()=> (
  <LazyAdminLayout>
    <Routes>
      <Route path='/dashboard' element={<LazySuspense component={LazyDashboard}/>}/>
      <Route path='/userDetails' element={<LazySuspense component={LazyUserDetails}/>}/>
    </Routes>
  </LazyAdminLayout>
)

function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/solidpay/Login" />} />
        <Route path="/solidpay/Login" element={<LazySuspense component ={LazyLogin} />} />
        <Route path="/solidpay/register" element={<LazySuspense component ={LazyRegister} />} />
        <Route path="/solidpay/user/*" element={<LazySuspense component ={UserRoutes} />} />
        <Route path = "/solidpay/admin/*" element={<LazySuspense component ={AdminRoutes} />} />
      </Routes>
  );
}

export default App;
