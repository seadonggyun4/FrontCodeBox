// [ Controlled 컴포넌트 ] 
// 상태가 있는 HTML요소의 상태를 컴포넌트 내부에서 처리하는 컴포넌트 기법


import React  from "react";

class ControlledComponent extends React.Component {
    state = {
        value: "컨트롤 컴포넌트!!"
    }
    
    render(){
        const { value } = this.state    

        return (
            <div>
                <h4>Controlled 컴포넌트</h4>
                <input type="text" value={value} onChange={this.change}/>
                <button onClick={this.click}>전송</button>
            </div>
        )
    }

    change = (e) => {
        // console.log(e.target.value)

        this.setState({value: e.target.value})
    }

    click = () => {
        console.log(this.state.value)
    }
}

export default ControlledComponent