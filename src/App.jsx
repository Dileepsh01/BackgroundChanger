 
// import './App.css'

import { useState } from "react"

function App() {
const [color, setcolor]=useState("")

 
  return (
    <>
     <div style={{backgroundColor:color, height:"690px"}} >
 
<div className="flex text-white gap-8 mx-8 " >
<button onClick={()=>setcolor("red")} className="bg-red-700 px-12 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 " style={{marginTop:"40%"}}> Red</button>
<button onClick={()=>setcolor("green")} className="bg-green-600 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 " style={{marginTop:"40%"}}> green</button>
<button onClick={()=>setcolor("yellow")} className="bg-yellow-400 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 " style={{marginTop:"40%"}}> yellow</button>
<button onClick={()=>setcolor("blue")} className="bg-blue-700 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> blue</button>
<button onClick={()=>setcolor("black")} className="bg-red-700 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> black</button>
<button onClick={()=>setcolor("white")} className="bg-yellow-50 text-black px-12 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> white</button>
<button onClick={()=>setcolor("olive")} className="bg-violet-300 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> olive</button>
<button onClick={()=>setcolor("gray")} className="bg-gray-600 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> gray</button>
<button onClick={()=>setcolor("pink")} className="bg-pink-600 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> pink</button>
<button onClick={()=>setcolor("purple")} className="bg-purple-600 px-6 py-2 rounded-xl font-bold text-2xl outline-slate-500 shadow-slate-500 "style={{marginTop:"40%"}}> purple</button>
 </div>



     </div>
      
    </>
  )
}

export default App
