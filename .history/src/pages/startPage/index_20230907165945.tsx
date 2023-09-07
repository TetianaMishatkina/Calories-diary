import React from 'react'
import { Main } from '../main'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const StartPage = () => {
    const { pathname } = useLocation()

    return (
        <div>
            {pathname.includes('main') ? (
                <Outlet />
            ) : (
                <>
                    <h2>Here is a start page</h2>
                    <Link to="main">Click here to open calendar</Link>
                </>
            )}


        </div>
    )
}