import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import Login from "./page/Login";
import Panel from "./layouts/Panel";
import Main from "./page/Main";
import Start from "./page/Start";
import Stop from "./page/Stop";
import Order from "./page/Order";

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
          </Route>
          <Route path="/admin" element={<Panel/>}>
          <Route index element={<Main/>}/>
          <Route path="start" element={<Start/>}/>
          <Route path="stop" element={<Stop/>}/>
          <Route path="order" element={<Order/>}/>  
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
