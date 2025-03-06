/* eslint-disable no-unused-vars */
import React,{useState, useRef} from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  
const panelRef=useRef(null)
const vehiclepanelRef=useRef(null)
const confirmRidePanelRef=useRef(null)
const panelCloseRef=useRef(null)
const vehicleFoundRef=useRef(null)
const waitingForDriverRef = useRef(null)

const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const[confirmRidePanel, setConfirmRidePanel]=useState(false)
  const [vehicleFound,setVehicleFound]=useState(false)
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
  if(panelOpen){
    gsap.to(panelRef.current, {
      height: '70%',
      padding: '24px',
      // opacity:1
  })
  gsap.to(panelCloseRef.current,{
    opacity:1
  })
}
else{
  gsap.to(panelRef.current, {
    height: '0%',
    padding: 0
    // opacity:0
})
  gsap.to(panelCloseRef.current,{
  opacity:0
})
  }
},[panelOpen])

useGSAP(function(){
  if(vehiclePanel){
    gsap.to(vehiclepanelRef.current, {
      transform: 'translateY(0%)',
    })
  }
  else{
    gsap.to(vehiclepanelRef.current, {
      transform: 'translateY(100%)',
    })
  }
    
},[vehiclePanel])


useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current, {
      transform: 'translateY(0%)',
    })
  }
  else{
    gsap.to(confirmRidePanelRef.current, {
      transform: 'translateY(100%)',
    })
  }
    
},[confirmRidePanel])

useGSAP(function(){
  if(vehicleFound){
    gsap.to(vehicleFoundRef.current, {
      transform: 'translateY(0%)',
    })
  }
  else{
    gsap.to(vehicleFoundRef.current, {
      transform: 'translateY(100%)',
    })
  }
    
},[vehicleFound])

useGSAP(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ waitingForDriver ])

  return (
    <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />


            <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img className='w-full h-full object-cover'  src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""  />
            </div>
            <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
              <div className='h-[30%] p-6 bg-white relative'>
                <h5 ref={panelCloseRef} 
                onClick={()=>{
                  setPanelOpen(false)
                }}
                 className=' opacity-0 absolute top-1 left-2 text-2xl '>
                  <i className='ri-arrow-down-wide-line'></i></h5>
                <h4 className='text-2xl font-semibold '>Find a trip</h4>
                <form  onSubmit={(e) => {
                  submitHandler(e)
                }}>
                  <div className="line absolute h-16  w-1 top-[39.5%] bg-gray-700 rounded-full  left-10"></div>
                <input 
                onClick={() => {
                  setPanelOpen(true)
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value)
                }} 
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full' 
                type="text" placeholder='Add a pickup location'/>
                <input
                onClick={() => {
                  setPanelOpen(true)
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value)
                }}
                className='w-full bg-[#eee] px-12 py-2 text-base rounded-lg mt-3' type="text" placeholder=' Enter your destination' />
              </form>
              </div>
                  <div ref={panelRef} className='bg-white h-[70%]  h-0 '>  {/* hidden for now */}
                   <LocationSearchPanel  panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
                </div>
            </div>
            <div ref={vehiclepanelRef} className="fixed z-10 bottom-0 bg-white px-3 py-10 translate-y-full w-full">
              <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
            </div>
            <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 bg-white px-3 py-10 translate-y-full w-full">
              <ConfirmRide  setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 bg-white px-3 py-10 translate-y-full w-full">
              <LookingForDriver/>
            </div>
            <div ref={waitingForDriverRef}  className='fixed w-full translate-y-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver waitingForDriver={waitingForDriver}/>
            </div>
     </div>
  )
}

export default Home
