import '../components/MainContent.css'
import { IoIosSearch } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";


const MainContent = () => {
    const shouldBeOrange = true;
    return (
        <main className='main'>
        
        <div className='search'>
                    <input type="text" placeholder='search' className='search-box' />
                   <button className='searchBtn'> 
                   <IoIosSearch className='search-logo' style={{fontSize:'25px'}}/>
                    </button>
                </div>
                
                <div className='main-container'>
                   
                    <div className='cards' id='box1'>

                        <div className='main-texts'>
                            <b>GHOSTED</b>
                            <p>Drama, action | 2023</p>

                        </div>
                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}/>
                        </div>
                     </div>

                   
                    <div className='cards' id='box2'> 
                  
                        <div className='main-texts'>
                            <b>QUANTUMANIA</b>
                            <p>Drama, action | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <FaRegStar color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}  />

                         </div>
                    </div>
                   
                    <div className='cards' id='box3'> 
                    
                        <div className='main-texts'>
                            <b>EVIL DEAD RISE</b>
                            <p>Drama, Comedy | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}/>
                         </div>

                    </div>
                   
                    <div className='cards' id='box4'> 

                    <div className='main-texts' id='text4'>
                            <b>THE SUPER MARIO BROS</b>
                            <p>Drama | 2023</p>
                        </div>

                    <div className='main-stars' id='stars4'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}/>
                         </div>
                    </div>
                   
                    <div className='cards' id='box5'>
                        <div className='main-texts'>
                            <b>DEAD RINGERS</b>
                            <p> Documentary | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <FaRegStar color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}  />

                         </div>
                    </div>
                   
                    <div className='cards' id='box6'> 
                         <div className='main-texts'>
                            <b>MANDALORIAN</b>
                            <p>Documentary | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <FaRegStar color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}  />

                         </div>
                     </div>
                   
                    <div className='cards' id='box7'> 
                    <div id='text7'>
                            <b>A TOURIST`S GUIDE TO LOVE</b>
                            <p>Sci-Fi, Action | 2023</p>
                        </div>

                         <div className='main-stars' id='stars7'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box8'> 
                        <div className='main-texts'>
                            <b>THE DIPLOMAT</b>
                            <p> Western | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <FaRegStar color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}  />

                         </div>
                    </div>
                   
                    <div className='cards' id='box9'> 
                    <div id='text9'>
                            <b>AVATAR: THE WAY OF WATER</b>
                            <p> Action, Comedy | 2023</p>
                        </div>

                         <div className='main-stars' id='stars9'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        

                         </div>
                    </div>
                   
                    <div className='cards' id='box10'> 
                    <div className='main-texts'>
                            <b>JOHN WICK : CHAPTER 4</b>
                            <p> Thriller | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        
                        

                         </div>
                    </div>
                   
                    <div className='cards' id='box11'> 
                        <div className='main-texts'>
                            <b>THE MPTHER</b>
                            <p> Thriller | 2023</p>
                        </div>

                         <div className='main-stars' >
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                       

                         </div>
                    </div>
                   
                    <div className='cards' id='box12'> 
                       <div className='main-texts'>
                            <b>AIR</b>
                            <p>Drama History | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box13'> 
                        <div className='main-texts'>
                            <b>EVIL DEAD RISE</b>
                            <p>Harror Thrailler| 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box14'> 
                        <div className='main-texts'>
                            <b>CRATER</b>
                            <p>Science Fiction | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box15'> 
                        <div className='main-texts'>
                            <b>BLACK KNIGHT</b>
                            <p>Comedy Science | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box16'> 
                        <div id='text16'>
                            <b>GUY RITCHIS THE COVENANT</b>
                            <p>Comedy Science | 2023</p>
                        </div>

                         <div className='main-stars' id='stars16'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box17'> 
                    <div className='main-texts'>
                            <b>Fast X</b>
                            <p>Action Crime | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box18'> 
                        <div className='main-texts' id='text18'>
                            <b >THE POPOE`S EXORCIST</b>
                            <p>Harror Thriller | 2023</p>
                        </div>

                         <div className='main-stars' id='stars18'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box19'> 
                    
                         <div className='main-texts'>
                            <b>CITADEL</b>
                            <p>Comedy Science | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <ImStarHalf color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"}/>
                         </div>

                    </div>
                   
                    <div className='cards' id='box20'>
                    <div className='main-texts'>
                            <b>CITY ON FIRE</b>
                            <p>Science Fiction | 2023</p>
                        </div>

                         <div className='main-stars'>
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                        <BsFillStarFill  color={shouldBeOrange ? "rgba(248, 65, 25, 1)" : "gray"} />
                         </div>
                    </div>
                   
                    <div className='cards' id='box21'> </div>
                   

                </div>
        </main>
    )
}

export{MainContent};