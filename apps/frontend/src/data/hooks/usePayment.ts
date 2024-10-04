import { useContext } from 'react'
import ContextPayment from '../contexts/ContextPayment'

const usePayment = () => useContext(ContextPayment)
export default usePayment
