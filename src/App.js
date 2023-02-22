import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalComponent from "./components/ConditionalComponent";
import Product from "./components/Product";
import AlertComponent from "./components/AlertComponent";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import FunctionalCounter from "./components/FunctionalCounter";
import Todo from "./components/Todo";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <Todo />
      <hr />
      <Hello />
      <hr />
      <Message name="Hany" />
      <hr />
      <Profile name="Hany" lastname="Khamis" />
      <hr />
      <Counter />
      <hr />
      <Resume name="Hany" lastname="Khamis" />
      <hr />
      <FunctionEvent />
      <hr />
      <ClassEvent />
      <hr />
      <FunctionalCounter />
      <hr />
      <ConditionalComponent />
      <hr />
      <Product />
      <hr />
      <AlertComponent />
      <hr />
      <Form />
      <hr />
    </div>
  );
}
