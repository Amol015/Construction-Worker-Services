import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./signupUser";

import Header from "./component/Header";
import LandingpageRouting from "./LandingpageRouting";
import LoginCustomer from "./LoginUser";


// import { Provider } from "react-redux";
// import store from './Store/reducer';

const App2 = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Provider store={store}> */}
                <Routes>
                    <Route path="/login" element={<LoginCustomer />} />
                    <Route path="/" element={<LandingpageRouting />} />
                    <Route index element={<LandingpageRouting />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
                {/* </Provider> */}
            </BrowserRouter>
        </>
    )
}

export default App2;