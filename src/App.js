import './App.css';
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="App">
      <div className="Container">
        <div className="Header">
          <Header />
        </div>
        <Switch>

          <Route exact path="/" component={Main} />

          <Route exact path="/:id" component={Character} />

        </Switch>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}