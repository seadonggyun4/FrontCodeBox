import { useContext } from "react"
import AppStateContext from "../contexts/AppStateContexts"

export default function useOrders(){
    const { orders } = useContext(AppStateContext)

    return orders
}