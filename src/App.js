import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// HashRouter 대신 BrowserRouter도 사용 가능
// BrouwserRouter는 url 뒤에 #이 붙지 않음
// 다만 github pages에 정확히 설정하기 번거로운 부분 있음

function App() {
    return <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/movie-detail" component={Detail} /> */}
        <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
}

export default App;
