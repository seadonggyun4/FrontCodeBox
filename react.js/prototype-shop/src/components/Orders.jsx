import { useMemo } from "react"
import useActions from "../hooks/useActions"
import useOrders from "../hooks/useOrders"
import usePrototypes from "../hooks/usePrototypes"

export default function Orders(){
    // Hooks
    const orders = useOrders()
    const prototypes = usePrototypes()
    const { remove, removeAll } = useActions()
    const totalPrice = useMemo(() => {
        return orders.map(order => {
            const {id, quantity} = order
            const prototype = prototypes.find(p => p.id === id)

            return prototype.price * quantity
        }).reduce((l, r) => l + r, 0)
    }, [orders, prototypes])
    console.log(orders)

    // 주문목록상태 가 없을때
    if(orders.length === 0){
        return(
           <aside>
                <div className="empty">
                    <div className="title">You don't have any orders</div>
                    <div className="subtitle">Click on a + to add an orders</div>
                </div>
           </aside>
        )
    } else { 
        // 주문목록 상태 가 있을때
        return(
            <aside>
                <div className="order">
                    {/* 주문 목록 */}
                    <div className="body">
                        {/* orders상태 반복 */}
                        {orders.map(order => {
                            const { id } = order
                            const prototype = prototypes.find(p => p.id === id)
                            const click = () => {
                                remove(id)
                            }

                            return(
                                <div className="item" key={id}>
                                    <div className="img">
                                        <video src={prototype.thumbnail} />
                                    </div>
                                    <div className="content">
                                        <p className="title">{prototype.title} X {order.quantity}</p>
                                    </div>
                                    <div className="action">
                                        <p className="price">${prototype.price * order.quantity}</p>
                                        <button className="btn btn--link" onClick={click}>
                                            <i className="icon icon--cross" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* 주문 합계 */}
                    <div className="total">
                        <hr/>
                        <div className="item">
                            <div className="content">Total</div>
                            <div className="action">
                                <div className="price">${totalPrice}</div>
                            </div>
                            <button className="btn btn--link" onClick={removeAll}>
                                <i className="icon icon--delete" />
                            </button>
                        </div>
                    </div>
                    <button className="btn btn--secondary" style={{margin: 10}}>Check Out</button>
                </div>
            </aside> 
        )
    }

}