import React from "react";

// ============ [ class 컴포넌트 에서 라이프사이클 ] ============
export default class Example4 extends React.Component{
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

    //최초에 dom이 render 됐을때
    componentDidMount(){
        console.log('componentDidMount :', this.state.count)
    }
    //state 값이 바뀌어 dom이 업데이트 됐을때
    componentDidUpdate(){
        console.log('componentDidUpdate :', this.state.count)
    }

    click = () => {
        this.setState({count: this.state.count + 1})
    }
}