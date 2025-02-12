import BarreDeroulante from './BarreDeroulante.tsx'
import BarreMenue from './barreMenue.tsx'
import './App.css'

function App() {

  return (
    <>
    <div className='flex flex-row'>
      <BarreMenue className='fixed top-5 left-5 flex flex-col md:flex-col bg-gray-300 gap-4 rounded-lg border-yellow-500 border-7 justify-start h-screen w-70'/>
      <BarreMenue className='fixed top-5 left-80 flex flex-col md:flex-row bg-gray-300 gap-4 rounded-full border-yellow-500 border-7 justify-center h-10 w-6/8'/>
    </div>
    </>
  )
}

export default App
