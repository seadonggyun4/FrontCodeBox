import { useContext } from "react"
import AppStateContext from "../contexts/AppStateContexts"

export default function usePrototypes(){
    const {prototypes} = useContext(AppStateContext)

    return prototypes
}