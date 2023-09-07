import { useState } from 'react'
import './App.css'
import { Main } from './pages/main'
import { StartPage } from './pages/startPage'

const routes = [
  {
    path: 'calories-diary',
    component: ({ children }: { children: JSX.Element }) => children,
    children: [
      {
        path: 'calories-diary/startPage',
        component: StartPage,
      },
      {
        path: 'calories-diary/main',
        component: Main,
      }
    ],
  },
]

function App() {

  return (
    <StartPage routes={routes} />
  )
}

export default App
