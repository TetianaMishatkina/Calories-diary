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
                    <h2>Welcome to the Calories Diary!</h2>
                    <p>This app wil allow you to count calories of the meals you`ve eaten</p>
                    <Link to="main">Click here to get started</Link>
                </>
            )}
        </div>
    )
}