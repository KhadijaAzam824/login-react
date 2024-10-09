import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagee from './assets/imagee.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    // ....to give color to whole page 
    <section className="min-h-screen
                       flex
                       items-center
                       justify-center
                       font-mono
                       bg-gradient-to-r
                       from-cyan-400
                       from-10% 
                       via-purple-500
                       via-50%
                       to-sky-200
                       to-100%">
    <div  className="flex
                    shadow-2xl">
    <div className="flex  
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-20
                    gap-8
                    bg-pink-300
                    rounded-2xl
                    
                    xl:rounded-tr-none
                    xl:rounded-br-none">
    <h1   className="text-5xl
                     font-bold">Well Come
     </h1>                  
    <div  className="flex
                    flex-col
                    text-2xl
                    text-left
                    gap-1">
      <span>Username</span>
      <input type="text"
            className="rounded-md
                       p-1
                       border-2
                       outline-none
                       focus:border-cyan-400
                       focus:bg-slate-50">
      </input>                
    </div> 
    <div    className="flex
                       flex-col
                       text-2xl
                       text-left
                       gap-1">
    <span>Password</span>  
    <input  type="password"
            className="rounded-md
                      p-1
                      border-2
                      outline-none
                      focus:border-cyan-400
                      focus:bg-slate-50">
    </input> 
      <div className="flex
                      gap-1
                      items-r">
    <input  type="checkbox">
    </input>
    <span>Remember Password</span>                    
    </div>



    </div>
  <button className="px-10
                     py-2
                     text-2xl
                     rounded-md
                     bg-gradient-to-tr
                     from-blue-500
                     to-blue-800
                     hover:from-green-600
                     hover:to-green-600">Login
  </button>
  <p className="font-semibold">Don't have an account?
  <a href="#" className="text-blue-400
  hover:underline">Register
  </a>
  </p>
   </div>
  < img src={imagee } alt="" 
       className="w-[450px] 
                 object-cover 
                 xl:rounded-tr-2xl
                 xl:rounded-br-2xl
                 xl:block hidden"></img>
   </div>
    
     
     
    </section>
    
  )
}

export default App
