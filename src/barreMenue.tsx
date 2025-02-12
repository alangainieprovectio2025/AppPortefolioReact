import { useState } from 'react'
import Button from './Button.tsx'
import MonCV from './MonCV.tsx'
import MesEtudes from './MesEtudes.tsx'
import MesCompetences from './MesCompetences.tsx'
import ErrorGest from './errorGest.tsx'

// Cette fonction va mettre en place une barre de menu qui à l'avenir serra mis dans un burger menue
function BarreMenue({className}: {className?:any}) {
        const [tab, setTab] = useState(0)
        const tabs = ['Home page', 'MonCV', 'MesEtudes', 'MesCompetences']
    
        function display(tab:number) {
            switch (tab) {
                case 0:
                return <p>Home page</p>
                case 1:
                return <MonCV/>
                case 2:
                return <MesEtudes/>
                case 3:
                return <MesCompetences/>
                default:
                return <ErrorGest name='page'/>
            }
        }

        return (
            <>
            <div className={className}> 
                {tabs.map(
                    (name:string, index:number) => 
                    <Button 
                        name={name} onClick={() => setTab(index)} focus={tab == index ? true : false}
                    />
                    // console.log({name})
                    // console.log({index})
                )}
            </div>
            <div className='fixed top-4/34 left-8/34 flex flex-col rounded-lg border-pink-50 border-7'>
                {display(tab)} 
            </div>
            </>
        )
    }

    export default BarreMenue