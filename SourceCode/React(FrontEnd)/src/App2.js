import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signupUser";

import Header from "./component/Header";
import LandingpageRouting from "./LandingpageRouting";
import UserLogin from "./App3";
// import { Provider } from "react-redux";
// import store from './Store/reducer';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from 'react-router-dom';

function App2() {
    return (
        <>
            <BrowserRouter>
                {/* <Provider store={store}> */}
                <Routes>
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/" element={<LandingpageRouting />} />
                    <Route index element={<LandingpageRouting />} />

                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
                {/* </Provider> */}
            </BrowserRouter>
        </>
    );
}

export default App2;