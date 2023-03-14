import Welcome from "./components/Welcome.js"
import  Home  from "./components/Home.js";
import Detail from "./components/Detail.js";
import Form from "../src/components/Form.js";
import {  } from "../src/styles/app.css";
import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/home" component={Home}/>
        <Route path="/detail" component={Detail} />
        <Route  path="/form" component={Form} />
        <Route path="*" component={()=> <img className="error" src={"https://www.alfaromeo.it/content/dam/moc/common/404-error/mobile/mobile_404.png"} alt="not-fount" />}/>
      </Switch>
    </div>
  );
}

export default App;
