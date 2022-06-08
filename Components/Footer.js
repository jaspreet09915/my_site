import React from 'react'

const Footer = () => {
  return (
    <div className=' pt-9 bg-blue-400 pb-9  relative w-screen'>
        <div className="flex flex-row mx-auto  justify-center space-x-14 mb-9">
            <div className="Linkedin text-blue-600 hover:text-white cursor-pointer ">Linkedin</div>
            <div className="Twitter text-blue-600 hover:text-white cursor-pointer">Twitter</div>
            <div className="Website text-blue-600 hover:text-white cursor-pointer">Website</div>
        </div>
        <div className="copyright flex flex-row justify-center">
            <div className=" text-white hover:text-blue-600 cursor-pointer">© 2018 Angela Yu</div>
            <div className="text-white hover:text-blue-600 cursor-pointer">@ The App Brewery.</div>
        </div>
    </div>
  )
}

export default Footer