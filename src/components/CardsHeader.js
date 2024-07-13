import React from 'react'

const CardsHeader = () => {
  return (
    <div className='container max-w-5xl m-auto px-4 z-30 -mt-20 relative'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 text-center'>
            <div className=' bg-fondo-color-gris min-h-44 max-w-72 flex flex-col justify-evenly gap-2 p-4'>
                <p className='text-lg font-semibold'>Mejores soluciones</p>
                <p className='text-gray-400'>Lorem Lorem aute velit consequat ex id commodo.</p>
            </div>
            <div className=' bg-primary-color min-h-56 min-w-80  flex flex-col justify-evenly gap-2 p-4'>
                <p className='text-lg font-semibold'>Mejores soluciones</p>
                <p className='text-gray-400'>Lorem Lorem aute velit consequat ex id commodo.</p> 
            </div>
            <div className=' bg-fondo-color-gris min-h-44 max-w-72 flex flex-col justify-evenly gap-2 p-4'>
                <p className='text-lg font-semibold'>Mejores soluciones</p>
                <p className='text-gray-400'>Lorem Lorem aute velit consequat ex id commodo.</p>
                
            </div>
        </div>
    </div>
  )
}

export default CardsHeader
