/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
                props.setVehiclePanel(false)
              }} className='p-1 text-center w-[93%] absolute top-0'><i className=" text-2xl text-gray-400 ri-arrow-down-wide-line pt-14"/></h5>
              <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehiclePanel(false)
              }} className='flex border-2 active:border-green-500  rounded-xl w-full items-center justify-between mb-3'>
                <img className="h-12" src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base font-semibold'>UberGo <span><i className="ri-user-3-fill "></i></span>4  </h4>
                  <h5 className='font-medium text-sm'>2 mins away</h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable, compacts rides</p>
                </div>
                <h2 className='text-lg font-semibold mr-1'>₹193.20</h2>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehiclePanel(false)
              }} className='flex border-2 active:border-green-500 rounded-xl w-full items-center justify-between '>
                <img className="h-12" src=" https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className=' ml-6 w-1/2'>
                  <h4 className='font-medium text-base font-semibold'> Moto <span><i className="ri-user-3-fill"></i></span>1 </h4>
                  <h5 className='font-medium text-sm'>3 mins away</h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold mr-1'>₹65.40</h2>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehiclePanel(false)
                
              }} className='flex border-2 active:border-green-500 rounded-xl w-full items-center justify-between mt-3'>
                <img className="h-12" src="https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?rs=1&pid=ImgDetMain" alt="" />
                <div className=' ml-6 w-1/2'>
                  <h4 className='font-medium text-base font-semibold'> UberAuto <span><i className="ri-user-3-fill"></i></span>3</h4>
                  <h5 className='font-medium text-sm'>3 mins away</h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
                </div>
                <h2 className='text-lg font-semibold mr-1'>₹118.21</h2>
              </div>
              

    </div>
  )
}

export default VehiclePanel
