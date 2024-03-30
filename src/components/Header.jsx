import { useState } from 'react';
import frame from '../assets/Frame.png'
import './header.css'
import { BsFillStarFill } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import { GoChevronDown } from "react-icons/go";


const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu =() => {
        setIsOpen(!isOpen);
    };

    const shouldBeOrange = true;
    
    const HeaderLinks = [ 
        {to: "HOME", Text: "HOME", active: false},
        {to: "CATALOG", Text: "CATALOG", active: true },
        {to: "MY_LIBRARY", Text: "MY LIBRARY", active: false},   
    ]

    return(

        <header className="header">
            
            <nav>
                <div className='logo-div'>
                    <div><img src={frame} alt="logo" /></div>
                    <div className='logo-text'>Cinemania</div>
                </div>

                <ul> 

                    { HeaderLinks.map((link, index) => {
                        return (
                           <li key={index}> 
                           <a  className={`nav-link  ${link.active ? "active" : ""} `} href={link.to}>{link.Text}</a>
                            </li>
                        )
                    })}
                </ul>

                         <button id='menu' onClick={toggleMenu}>Menu <GoChevronDown className='menu-icon'/> </button> 
                    
                            <div className={`${isOpen ? 'DropdownMenu ' : 'close-dropdown'}` }>
                                {isOpen && (

                              <ul>
                                  <li> <a id='home' href="#">Home</a> </li>
                                  <li> <a id='catalog' href="#">CATALOG</a> </li>
                                  <li> <a href="#">MY LIBRARY</a> </li>
                              </ul>
                                )}
                          </div>

                    


                 <div></div>
              
            </nav>

            <div className='container'>

                <h1 className='h1'> Quantumania</h1>

               <div className='stars'>
                <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}/>
                </div>

             <div className='content'>
                <p className='text'>Super-Hero find themselves exploring the Quantum Realm, 
                interacting with strange new creatures and embarking on an adventure that will push them beyond ... <span className='content2'>  the limits of what they thought possible. </span> </p>

                    <button className='btn1'>Wacth trailer</button>
                    <button className='btn2'>More details</button>
             </div>
                </div>
        </header>
    )
    
}

 
export{Header};