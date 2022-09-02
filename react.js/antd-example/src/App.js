import logo from './logo.svg';
import './App.css';
//[ antd 불러오기 ] 
import 'antd/es/calendar/style/css' //스타일
import { Calendar} from 'antd' //모듈
import { GithubOutlined } from "@ant-design/icons"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GithubOutlined />
        </p>
        <div className="site-calendar-demo-card">
          <Calendar/>
        </div>
      </header>
    </div>
  );
}

export default App;
