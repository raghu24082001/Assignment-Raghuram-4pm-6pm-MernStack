
import del from '../assets/react.svg'

const Navbar = () => {
  return (
      <>
        <div class='bg-blue-500 p-3 flex justify-between'> 
                    <div><img src={del} width={'80%'} alt="" /></div>
                <div class='text-white flex gap-3 ' >
                    <a href="" class='transition duration-300 hover:-translate-y-1'>Home</a>
                    <a href="" class='transition duration-300 hover:-translate-y-1'>About</a>
                    <a href="" class='transition duration-300 hover:-translate-y-1'>Career</a>
                    <a href="" class='transition duration-300 hover:-translate-y-1'>Login</a>
                    
                </div>
                </div>
                
      </>
  )
}

export default Navbar