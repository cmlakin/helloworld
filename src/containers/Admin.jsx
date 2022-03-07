import React from "react"
import { Route, Routes, useRoutes } from 'react-router-dom'
import StoreManager from "./StoreManager"
import GamingManager from "./GamingManager"


const Admin = () => {
    const {path} = '/admin/*'

    console.log(path)
    return (
        <>
            <Routes>
                <Route path={`${path}/storemanager`} element={StoreManager}/>
                <Route path={`${path}/gaming`} element={GamingManager}/>
            </Routes>
        </>
    )
}

// this is the better way to do it
export default Admin