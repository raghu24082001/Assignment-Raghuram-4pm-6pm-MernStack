import del from '../assets/react.svg'

const Navbar = () => {
  return (
    <>
    <div className='box1'> 
        <div><img src={del} width={'70%'} alt="" /></div>
    <div className='box2'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Career</a>
        <a href="">Login</a>
        
    </div>
    </div>
    </>
  )
}

export default Navbar

export const Navbar1 = ()=>{
    console.log('hi')
}