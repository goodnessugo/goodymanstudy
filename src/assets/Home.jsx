import React from 'react'

const Home = () => {
    return (

        <div className='h-screen overflow-x-hidden'>

            <div className='w-screen bg-green-500 h-[10vh]  flex justify-between   sticky top-0 items-center px-9 md:px-28'>
                <div className='logo w-10 h-10 bg-green-200'></div>
                <div className='menu flex justify-between items-center gap-5 '>
                    <h1>About</h1>
                    <h1>Enroll</h1>
                    <h1>Contact Us</h1>

                    <div>
                        <button className='bg-black px-5 py-2 text-white font-bold'>Donate</button>
                    </div>
                </div>
            </div>
            <div className='bg-red-300 w-screen h-[90vh] '>
                <h1 className='text-3xl'>Home is Here for all </h1>
            </div>

        </div>
    )
}

export default Home