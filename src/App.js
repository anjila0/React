import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Sonica" heroName="superwomen">
        <p>This is children props</p>
      </Greet>
      <Greet name="Tanush" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Saugat" heroName="supermen" /> */}
      {/* <Welcome name="Sonica" heroName="superwomen" />
      <Welcome name="Tanush" heroName="Batman" />
      <Welcome name="Saugat" heroName="supermen" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
