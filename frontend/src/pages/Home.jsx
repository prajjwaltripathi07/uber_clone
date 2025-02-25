import 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='bg-[url(https://media.istockphoto.com/id/869995028/photo/traffic-stop-signal.jpg?s=612x612&w=0&k=20&c=6U1v_FWJ7rhKznxrDVJA-5FkmzxPtKLfJrIL2AHLW-w=)] h-screen  pt-8  flex justify-between flex-col  w-full bg-red-100 bg-cover'>
        <img className='w-20  ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className=' bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
            <Link to={'/login'} className='  flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 font-bold'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
