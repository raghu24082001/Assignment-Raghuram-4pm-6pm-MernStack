
import { useContext } from 'react'
import ButtonContext from '../../context/ButtonContext'



const About = () => {

  const {lan,changeLan,theme} = useContext(ButtonContext)
    
  return (
    <>
     <div className={theme ? 'bg-blue-800 p-5 text-center flex flex-col items-center gap-2 ' :'bg-blue-300 p-5 text-center flex flex-col items-center gap-2 '}>
        <div>{lan}</div>
        <button onClick={changeLan} className='bg-black w-50 text-s text-white p-1 rounded'>ChangeLanguage</button>
     </div>
    </>
  )
}

export default About