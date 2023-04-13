import React from "react";

class UncontrolledComponent extends React.Component {
    // 가상DOM 저장 방법
    inputRef = React.createRef();
    
    render(){
        return(
            <>
                <div>
                    <h4>Uncontrolled 컴포넌트: 실제돔</h4>
                    <input id="my-input" type="text" />
                    <button onClick={this.click1}>전송</button>
                </div>
                <div>
                    <h4>Uncontrolled 컴포넌트: 가상돔</h4>
                    <input type="text" ref={this.inputRef}/>
                    <button onClick={this.click2}>전송</button>
                </div>
            </>
        )
    }

    
    click1 = () => {
        // ========== [ 실제DOM 에 접근 후에 사용 ] ==========
        // - input 태그의 현재 상태값(value) 를 꺼내서 전송한다.
        // - react에서는 지양하는 방법, 가상돔 활용을 적극 권장
        const input =  document.querySelector('#my-input').value;
        console.log('실제Dom :',input)
    }

    click2 = () => {
        // ========== [ 가상DOM 에 접근 후에 사용 ] ==========
        const input = this.inputRef.current.value
        console.log('가상Dom :',input)
    }
}

export default UncontrolledComponent