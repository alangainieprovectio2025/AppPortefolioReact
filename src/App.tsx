import React from 'react';
import BarreMenue from './BarreMenue.tsx';
import './App.css';
import { useState } from 'react';
import MonCV from './MonCV.tsx';
import MesEtudes from './MesEtudes.tsx';
import MesCompetences from './MesCompetences.tsx';
import ErrorGest from './errorGest.tsx';
import HomePage from './HomePage.tsx';
import Projets from './Projets.tsx';
import Contacts from './Contacts.tsx';

function display(tab: number) {
  switch (tab) {
    case 0:
      return <HomePage />;
    case 1:
      return <MonCV />;
    case 2:
      return <MesCompetences />;
    case 3:
      return <Projets />;
    case 4:
      return <MesEtudes />;
    case 5:
      return <Contacts />;
    default:
      return <ErrorGest name="page" />;
  }
}

function displayTab(tab: number) {
  switch (tab) {
    case 0:
      return <HomePage />;
    case 1:
      return <MonCV />;
    case 2:
      return <MesCompetences />;
    case 3:
      return <Projets />;
    case 4:
      return <MesEtudes />;
    case 5:
      return <Contacts />;
    default:
      return <ErrorGest name="page" />;
  }
}

function App() {
  const [tab1, setTab1] = useState(0);
  const [tab2, setTab2] = useState(0);
  const [tabs1, setTabs1] = useState(['...']);

  const handleTab2Click = (tabIndex: number) => {
    setTab2(tabIndex);
    switch (tabIndex) {
      case 0:
        setTabs1(["Introduction", "Sommaire"]);
        break;
      case 1:
        setTabs1(["A propos de moi", "Curriculum Vitae"]);
        break;
      case 2:
        setTabs1(["JavaScript", "React", "Node.js"]);
        break;
      case 3:
        setTabs1(["Projet1", "Projet2"]);
        break;
      case 4:
        setTabs1(["Lycéer", "Epitech", "ESMA", "ESUP"]);
        break;
      case 5:
        setTabs1(["Linkedin", "Gmail", "Teléphone", "..."]);
        break;
      default:
        setTabs1(['Home page', 'Softskills']);
        break;
    }
  };

  return (
    <div className="bg-[url('./background.jpg')] bg-fixed">
      <div className="absolute flex flex-row">
        <BarreMenue
          className="fixed top-5 left-5 flex flex-col md:flex-col bg-gray-300 gap-4 rounded-lg border-yellow-500 border-7 justify-start h-screen w-70"
          setTab={setTab1}
          tabs={tabs1}
        />
        <BarreMenue
          className="fixed top-5 left-80 flex flex-col md:flex-row bg-gray-300 gap-4 rounded-full border-yellow-500 border-7 justify-center h-10 w-6/8"
          setTab={handleTab2Click}
          tabs={['Home page', 'À propos de moi/CV', 'Mes Competences', 'Projets', 'Mes Etudes', 'Contact']}
        />
      </div>
      <div className="bg-[url('./background.jpg')] bg-fixed fixed top-4/34 left-8/38 w-7/10 p-10 flex flex-col rounded-lg border-yellow-50 border-7 gap-4">
        <div className="flex flex-col bg-gray-200 rounded-lg border-pink-50 border-7">
          {display(tab1)}
        </div>
        <hr/>
        <div className="flex flex-col rounded-lg border-pink-50 border-7">
          {display(tab2)}
        </div>
      </div>
    </div>
  );
}

export default App;
