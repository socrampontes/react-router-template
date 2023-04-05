import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<HomePage/>}/>
                <Route path="/profile/:name" element={<ProfilePage/>} />
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}