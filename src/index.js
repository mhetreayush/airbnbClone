import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import CardData from './Components/Card/CardData';
import {Switcher} from './Components/Controls/DarkMode';
function Page(){
  const cardElements = CardData.map( x => {
    return (<Card 
    key= {x.key}
    item={x}
        />
)})
  return(
    <div className='bg-white dark:bg-gray-700'>
      <div className="sticky top-0 z-40">
      <Navbar />
      </div>
      <div className='relative px-2'>
      <Hero />
      <div className="p-5 flex items-center gap-x-5 justify-center flex-wrap m-5">
          {cardElements}
      </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById("root")
)

Switcher()