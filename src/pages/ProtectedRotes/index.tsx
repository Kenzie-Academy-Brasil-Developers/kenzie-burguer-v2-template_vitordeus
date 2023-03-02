import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRotes = () => {

  const token = localStorage.getItem('@kenziebook:@TOKEN')

  return(
    token
    ?
    <Outlet/>
    :
    <Navigate to='/' />
  )
}

export default ProtectedRotes;