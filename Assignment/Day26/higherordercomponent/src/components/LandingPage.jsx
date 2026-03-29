import React from 'react'

const LandingPage = ({heading,style}) => {
  return (
    <>
    <div className={style}>
        {heading}
    </div>
    </>
  )
}

export default LandingPage