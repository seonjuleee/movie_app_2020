import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

// 라우터는 심플한 리액트 컴포넌트
// 라우터는 url을 가져다가 확인하고 우리가 라우터에게 뭘 명령했느냐에 따라 라우터가


// /about url으로 가면 Home이랑 같이 겹쳐보인다
// 리액트 라우터가 작동하는 방식!
// 작은 범위를 라우팅하면 포함하고 있는 것들도 같이 나오게됨

// 리액트 라우터는 기본적으로 url을 가져오고 나서 비교하게 됨
// 그리고 매치가 되면 보여주게됨
// 그래서 /home/introduction은 2개의 라우터가 매치가 됨
// /home이랑 /home/introduction 2개

// 이걸 고치려면 exact={true} 넣어주기
// 이거 아니면 안한다는 뜻

function App() {
    return <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />

        {/* <Route path="/home">
            <h1>Home</h1>
        </Route>
        <Route path="/home/introduction">
            <h1>Introduction</h1>
        </Route>
        <Route path="/about">
            <h1>About</h1>
        </Route> */}

    </HashRouter>
}

export default App;
