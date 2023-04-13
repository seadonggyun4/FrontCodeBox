import React from "react"
import styles from "./LoginButton.module.css"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)//module.css를 사용할때 classNames를 이용하는 방법


class LoginButton extends React.Component {
    state = {
       loading: false 
    }

     

    startLoading = () => {
      this.setState({
        loading: true,
      })
      setTimeout(()=>{
        this.setState({
            loading: false,
        })
      },1000)
    }


    render() {
        return <button onClick={this.startLoading} className={cx("button", {loading: this.state.loading})}>로그인 하기</button>
    }
   
}

export default LoginButton