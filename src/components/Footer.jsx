import '../components/Footer.css'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";



const Footer = () => {

    return (
        <footer>

        <div className='numbers'>

          <FaChevronLeft style={{fontSize:'20px'}} className='back' />

          <button className='num-1'> 01 </button>

          <button className='num_btn'> 02 </button>
          <button className='num_btn'> 03 </button>

          <BsThreeDots style={{fontSize:'20px'}} className='next-back'/>

          <button className='num_btn'> 24 </button>

          <FaChevronRight style={{fontSize:'20px'}} className='next-back'/> 
        
        </div>

        <div className='footer'>
            <p className='footer-text'>©  2023 | All Rights Reserved | Developed with </p>
            <FaHeart className='footer-heart'/>
            <p className='footer-text'>by <a className='footer-text' href="https://goit.global/ua/category/projects/students/" target='blank'> GoIT Students</a></p>

        </div>

        </footer>

       

    )
}

export{Footer};