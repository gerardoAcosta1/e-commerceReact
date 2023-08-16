import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from './store/slices/products.slice'
import Header from './componentes/shared/Header'
import CartPage from './componentes/shared/CartPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPage from './pages/ProductIdPage'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import ProtectedRoutes2 from './pages/ProtectedRoutes2'
import AsideMovilPage from './pages/AsideMovilPage'

function App() {

  const [visible, setVisible] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])
  
  return (
    <div>
      <Header
        setVisible={setVisible}
        visible={visible}
        visibleA={visibleA}
        setCount={setCount}
        count={count}
      />
      <AsideMovilPage
      setVisibleA={setVisibleA}
      visibleA={visibleA}
      visible={visible}
    
      />
      
      <Routes>
        <Route path='/' element={<HomePage 
         setVisibleA={setVisibleA}
         visibleA={visibleA}
         visible={visible}
       
         
         />} />
         
        <Route path='/register' element={<RegisterPage /> } />
        <Route path='/login' element={<LoginPage />} />
        
        <Route path='/product/:id' element={<ProductIdPage />} />
      </Routes>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<ProtectedRoutes2 />}>
            <Route path='/product/:id' element={<CartPage
              visible={visible}
              count={count}
              setVisible={setVisible}
            />}>
            </Route>
            <Route path='/purchases' element={<CartPage
              visible={visible}
              count={count}
              setVisible={setVisible}
            />}>
            </Route>
            <Route path='/login' element={<CartPage
              visible={visible}
              count={count}
              setVisible={setVisible}
            />}>
            </Route>
          </Route>
          <Route exact path='/' element={<CartPage
            visible={visible}
            count={count}
            setVisible={setVisible}
            setVisibleA={setVisibleA}
          />}>
          </Route>
          <Route exact path='/' element={<AsideMovilPage/>}>
       
          </Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
