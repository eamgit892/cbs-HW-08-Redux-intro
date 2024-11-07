import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './features/Counter'
import { Counter2 } from './features/Counter2'
import { Notes } from './features/Notes'

function App() {

  return (
    <>
         
       <table>
          <thead>
            <tr>
                <th>Task 1</th>
                <th>Task 2 <br />+4 actions</th>
                <th>Task 3 <br />Notes in array</th>
            </tr>
          </thead>
          <tbody>

            <tr>
                <td>
                  <Counter /> 
                </td>
                <td>
                  <Counter2 /> 
                </td>
                <td>
                  <Notes /> 
                </td>
            </tr>
          </tbody>
       </table>
    </>
  )
}

export default App
