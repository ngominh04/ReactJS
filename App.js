import logo from './huyen.jpg';
import './App.css';
import FunComp from './component/Funcomp';
import ClassComp from './component/Classcomp';
import ArrowFunction from './component/ArrowFunction';
import MemberInfor from './component/MemberInfor';
import DemoState from './component/DemoState';

// tạo đối tượng member infor
const member={
  path: '/img/huyen.jpg',
  name: "Huyền",
  age: "18"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hê lô sờ ly ly
        </a>
      </header>
      <FunComp name="Ngô Văn Minh" company="devmaster"/>
      <ClassComp name="Huyền thúi" address="25 Vũ Ngọc Phan"/>
      <ClassComp name="Huyền thúi1" address="25 Vũ Ngọc Phan"/>
      <ClassComp name="Huyền thúi2" address="25 Vũ Ngọc Phan"/>

      <ArrowFunction infor=""/>

      <MemberInfor infor={member}/>
      <DemoState/>
    </div>
  );
}

export default App;
