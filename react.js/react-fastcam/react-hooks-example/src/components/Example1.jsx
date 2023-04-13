import React from "react";

// ============ [ class 컴포넌트 에서 state 다루는법 ] ============
export default class Example1 extends React.Component{
    state = {
        count: 0,
    }
  
  
    render(){
        const { count } = this.state

        return (
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={this.click}></button>
            </div>
        )
    }


    click = () => {
        this.setState({count: this.state.count + 1})
    }
}