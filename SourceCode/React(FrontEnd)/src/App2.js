import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signupUser";
import Appli from "./App3";
import Header from "./component/Header";
import LandingpageRouting from "./LandingpageRouting";
// import { Provider } from "react-redux";
// import store from './Store/reducer';

const App2 = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Provider store={store}> */}
                <Routes>
                    <Route path="/login" element={<Appli />} />
                    <Route path="/" element={<LandingpageRouting />} />
                    <Route index element={<LandingpageRouting />} />

                    {/* <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/AdminLogin" element={<AdminLogin />} />
                    <Route path="/TeacherLogin" element={<TeacherLogin />} />
                    <Route path="/StudentLogin" element={<StudentLogin />} />
                    <Route path="/AdminSignUp" element={<AdminSignUp />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} /> */}
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
                {/* </Provider> */}
            </BrowserRouter>
        </>
    )
}

export default App2;