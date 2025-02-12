import Button from "./Button.tsx"
import BarreMenue from "./BarreMenue.tsx"

function BarreDeroulante() {

  return (
    <div className="top-1/2 left-1/2 inline-block text-left">
      {/* Boutton parent */}
      <Button 
        name='Burger Menue' onClick={() => setTab(index)} focus={tab == index ? true : false}
      />

      {/* Menu enfant déroulant */}
      <BarreMenue className='fixed top-5 left-80 flex flex-col md:flex-row bg-gray-300 gap-4 rounded-full border-yellow-500 border-7 justify-center h-10 w-6/8'/>
    </div>
    )
}

export default BarreDeroulante