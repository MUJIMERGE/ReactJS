import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // BrowserRouter -> 우리가 일반적으로 아는 URL
  // HashRouter -> # 가 붙음
  // 구체적인 차이는 ㅁ?ㄹ
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        ></Route>
        <Route 
          path="/movie/:id"
          element={<Detail />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
