/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const LocationSearchPanel = (props) => {

 const locations=["248, near Kapoor's cafe, Shreyians Coding School, Bhopal","314/7 Hans Nagar, Shastri Nagar, Kanpur"]

  return (
    <div >{
      locations.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }}className='flex top-0 gap-4 border-2 px-3 rounded-xl  items-center my-2 border-gray-100 active:border-black justify-start'>
        <h2 className='bg-[#eee]h-8 flex items-center justify-center w-12 rouded-full'><i className="ri-map-pin-fill"/></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
      })
    }
    </div>
  )
}

export default LocationSearchPanel
