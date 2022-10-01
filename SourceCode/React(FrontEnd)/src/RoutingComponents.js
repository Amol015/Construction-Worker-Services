import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./signupUser";

import Header from "./component/Header";
import LandingpageRouting from "./LandingpageRouting";
import LoginCustomer from "./LoginUser";
import CarpenterPage from "./component/Carpenter";
import SignUpSP from "./signupSerProvider";
import BookSlot from "./component/BookSlot";
import PlumberPage from "./component/Plumber";
import ElectricianPage from "./component/Electrician";
import InteriorPage from "./component/InteriorDesigner";
import ServicePage from "./component/ServicePage";


// import { Provider } from "react-redux";
// import store from './Store/reducer';

const RoutingComponents = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Provider store={store}> */}
                <Routes>
                    <Route path="/login" element={<LoginCustomer />} />
                    <Route path="/" element={<LandingpageRouting />} />
                    <Route index element={<LandingpageRouting />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/booknow" element={<LoginCustomer />} />
                    <Route path="/signupSP" element={<SignUpSP />} />
                    <Route path="/bookslot" element={<BookSlot />} />
                    <Route path="/carpenter" element={<CarpenterPage />} />
                    <Route path="/plumber" element={<PlumberPage />} />
                    <Route path="/electrician" element={<ElectricianPage />} />
                    <Route path="/interior" element={<InteriorPage />} />
                    <Route path="servicepage" element={<ServicePage />} />

                </Routes>
                {/* </Provider> */}
            </BrowserRouter>
        </>
    )
}

export default RoutingComponents;