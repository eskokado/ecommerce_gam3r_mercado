import { useContext } from 'react'
import ContextProducts from '../contexts/ContextProducts'

const useProducts = () => useContext(ContextProducts)
export default useProducts
