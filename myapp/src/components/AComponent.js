import React from 'react'
import BComponent from './BComponent';
import DataContext from '../DataContext';


const AComponent = () => {
    const vasiyatnama="mere grand children ko 400000 bhetvasiyat me milege";
  return (
   
    <DataContext.Provider value={vasiyatnama}>
    <div> AComponent
       <BComponent/>
    </div>
    </DataContext.Provider>
   
  )
}

export default AComponent
