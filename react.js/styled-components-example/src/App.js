import logo from './logo.svg';
import './App.css';
import StyledButton from './components/StyledButton';
import styled, {createGlobalStyle} from 'styled-components';
import StyledA from './components/StyledA';

// 새로운 컴포넌트를 생성한 뒤 기존 컴포넌트의 스타일 적용 방법 및 스타일 추가
const PrimaryStyledButton = styled(StyledButton)`
 background: transparent;
 color: blue;
 border: 2px solid blue;
`

// 특정 컴포넌트를, 해당컴포넌트에 미리정의된 컴포넌트의 스타일을 적용시키고 싶다면, as 내부에 넣으면된다.
const UppercaseButton = (props) => <button {...props} children={props.children.toUpperCase()}/>

// 컴포넌트 생성후 스타일 처리방법 
// props 로 인자를 받아 분기처리또한 가능하다.
const MyButton = props => <button {...props} children={`MyButton ${props.children} `}/>
const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: ${(props) => props.color || "palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
  cursor: pointer;

  :hover {
    border: 2px solid red;
  }
`

// 전역스타일 지정 방법
const GlobalStyle = createGlobalStyle`
body{
  background: yellow;
}

button{
  color:yellow;
}

`
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <StyledButton>버튼</StyledButton>
          <StyledButton primary>버튼</StyledButton>
          <PrimaryStyledButton >버튼</PrimaryStyledButton>
          <StyledButton as="a" href="/">버튼</StyledButton>
          <StyledButton as={UppercaseButton} href="/">button</StyledButton>
          <StyledMyButton color="green">button</StyledMyButton>
          <StyledA color="white" href="https://google.com">링크링크</StyledA>
        </div>
      </header>
    </div>
  );
}

export default App;

