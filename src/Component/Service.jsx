import React from 'react'
import CardSer from './CardSer'
import Sdata from './ServiceData'

const Service = () => {
  return (<>
    <div className='my-5'>
      <h3 className='text-center '>Our Services</h3>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className='row gy-4'>
            {
              Sdata.map((val, index) => {
                return (
                  <CardSer
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    per={ val.per } />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Service
