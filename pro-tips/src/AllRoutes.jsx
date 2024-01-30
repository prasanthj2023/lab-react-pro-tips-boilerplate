import React from "react";
import { Routes, Route } from "react-router-dom";
import Forms from "./Components/Forms";
import Contacts from "./Components/Contacts";

const AllRoutes =()=>{
    return (
     <>
     <Routes>
        <Route path="/forms" element={<Forms />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
     </Routes>
     </>   
    )
}

export default AllRoutes;