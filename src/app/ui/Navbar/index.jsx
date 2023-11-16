
"use client"

import { useState } from 'react'
import Car from './Car'
import List from './List'

export default function Bar() {

    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)


    const handle =(bol)=>{
        // left
        if(bol == true){
            setShowRight(false)
            setShowLeft(!showLeft)
        }else if(bol == false) {
            setShowLeft(false)
            setShowRight(!showRight)
        }if(bol == undefined) {
            setShowLeft(false)
            setShowRight(false)

        }

    }

    return <>

        <aside 
        className={`absolute inset-0 
        transition-transform 
        duration-500
        ease-out 

        ${showLeft ? "translate-x-0" : "translate-x-[-100%]"}`}>
            <div onClick={()=>handle(true)}  className='-z-50 absolute inset-0 bg-black bg-opacity-50'/>
            
            
            <div 
            className={`
            bg-dark rounded-r-[1rem] min-h-screen 
            transition-all 
            ${showLeft ? "w-4/5" : "w-full"} `}>

                <List/>

            </div>
        </aside>

        {/* CAR */}
        <aside 
        className={`absolute inset-0 
        transition-transform 
        duration-500
        ease-out 

        ${showRight ? "translate-x-0" : "translate-x-[100%]"}`}>
            <div onClick={()=>handle(false)}   className='-z-50 absolute inset-0 bg-black bg-opacity-50'/>
            
            
            <div 
            className={`
            bg-dark rounded-l-[1rem] min-h-screen 
            transition-all ml-auto
            ${showRight ? "w-4/5" : "w-full"} `}>
<Car/>
            </div>
        </aside>



        <footer className=" gap-5 px-5 py-1 bg-white items-center fixed inset-x-0 bottom-0">
            <ul className="flex justify-between w-full py-2">

                <li>
                        <i onClick={()=>handle(true)}>
                            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.1875 2.53125C1.46016 2.53125 0.875 3.09551 0.875 3.79688V6.32812C0.875 7.02949 1.46016 7.59375 2.1875 7.59375H4.8125C5.53984 7.59375 6.125 7.02949 6.125 6.32812V3.79688C6.125 3.09551 5.53984 2.53125 4.8125 2.53125H2.1875ZM10.5 3.375C9.53203 3.375 8.75 4.1291 8.75 5.0625C8.75 5.9959 9.53203 6.75 10.5 6.75H26.25C27.218 6.75 28 5.9959 28 5.0625C28 4.1291 27.218 3.375 26.25 3.375H10.5ZM10.5 11.8125C9.53203 11.8125 8.75 12.5666 8.75 13.5C8.75 14.4334 9.53203 15.1875 10.5 15.1875H26.25C27.218 15.1875 28 14.4334 28 13.5C28 12.5666 27.218 11.8125 26.25 11.8125H10.5ZM10.5 20.25C9.53203 20.25 8.75 21.0041 8.75 21.9375C8.75 22.8709 9.53203 23.625 10.5 23.625H26.25C27.218 23.625 28 22.8709 28 21.9375C28 21.0041 27.218 20.25 26.25 20.25H10.5ZM0.875 12.2344V14.7656C0.875 15.467 1.46016 16.0312 2.1875 16.0312H4.8125C5.53984 16.0312 6.125 15.467 6.125 14.7656V12.2344C6.125 11.533 5.53984 10.9688 4.8125 10.9688H2.1875C1.46016 10.9688 0.875 11.533 0.875 12.2344ZM2.1875 19.4062C1.46016 19.4062 0.875 19.9705 0.875 20.6719V23.2031C0.875 23.9045 1.46016 24.4688 2.1875 24.4688H4.8125C5.53984 24.4688 6.125 23.9045 6.125 23.2031V20.6719C6.125 19.9705 5.53984 19.4062 4.8125 19.4062H2.1875Z" fill="black" fill-opacity="0.75" />
                            </svg>
                        </i>
                </li>

                <li>
                    <i onClick={()=>handle()}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_90_18)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.71073 1.93292C3.22502 0.801496 4.3543 -0.00850404 5.61859 6.73864e-05H24.3814H24.3772L24.3857 1.0715V6.73864e-05H24.3814C25.6457 -0.00850404 26.775 0.801496 27.2893 1.93292L27.2914 1.93721L29.235 6.25507H0.765017L2.70859 1.93721L2.71073 1.93292ZM1.6629e-05 8.93364H30V11.8586C30 12.4244 29.7986 12.9858 29.4107 13.4144C29.2154 13.6336 28.9761 13.8092 28.7085 13.93C28.4408 14.0507 28.1508 14.1137 27.8572 14.1151H2.14287C1.84926 14.1137 1.55921 14.0507 1.29156 13.93C1.02391 13.8092 0.784643 13.6336 0.589302 13.4144C0.207723 12.9862 -0.00215129 12.4321 1.6629e-05 11.8586V8.93364ZM2.14287 17.8844C2.14287 17.6002 2.25576 17.3277 2.45669 17.1267C2.65762 16.9258 2.93014 16.8129 3.2143 16.8129H26.7857C27.0699 16.8129 27.3424 16.9258 27.5433 17.1267C27.7443 17.3277 27.8572 17.6002 27.8572 17.8844V27.8572C27.8572 28.4255 27.6314 28.9706 27.2295 29.3724C26.8277 29.7743 26.2826 30.0001 25.7143 30.0001H23.025V21.8786C23.0246 21.8159 23.011 21.7539 22.9851 21.6967C22.9593 21.6395 22.9218 21.5883 22.875 21.5465C22.7751 21.4567 22.6451 21.4078 22.5107 21.4094H18.2422C18.1079 21.408 17.9779 21.4569 17.8779 21.5465C17.8311 21.5883 17.7936 21.6395 17.7677 21.6967C17.7419 21.7539 17.7283 21.8159 17.7279 21.8786V30.0001H4.28573C3.71741 30.0001 3.17237 29.7743 2.7705 29.3724C2.36864 28.9706 2.14287 28.4255 2.14287 27.8572V17.8844ZM5.36145 21.4286V24.1286C5.36145 24.4128 5.47433 24.6853 5.67526 24.8863C5.87619 25.0872 6.14871 25.2001 6.43287 25.2001H12.8914C13.1756 25.2001 13.4481 25.0872 13.6491 24.8863C13.85 24.6853 13.9629 24.4128 13.9629 24.1286V21.4286C13.9629 21.1445 13.85 20.872 13.6491 20.671C13.4481 20.4701 13.1756 20.3572 12.8914 20.3572H6.43287C6.14871 20.3572 5.87619 20.4701 5.67526 20.671C5.47433 20.872 5.36145 21.1445 5.36145 21.4286Z" fill="black" fill-opacity="0.75" />
                            </g>
                            <defs>
                                <clipPath id="clip0_90_18">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                    </i>
                </li>

                <li>
                   
                        <i onClick={()=>handle(false)} >
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.6667 21.25C20.1867 21.25 19 22.3996 19 23.8334C19 24.5185 19.281 25.1756 19.7811 25.6601C20.2812 26.1445 20.9594 26.4167 21.6667 26.4167C22.3739 26.4167 23.0522 26.1445 23.5523 25.6601C24.0524 25.1756 24.3333 24.5185 24.3333 23.8334C24.3333 23.1482 24.0524 22.4912 23.5523 22.0067C23.0522 21.5222 22.3739 21.25 21.6667 21.25ZM0.333344 0.583374V3.16671H3.00001L7.80001 12.9705L5.98668 16.135C5.78668 16.4967 5.66668 16.923 5.66668 17.375C5.66668 18.0602 5.94763 18.7173 6.44772 19.2017C6.94782 19.6862 7.6261 19.9584 8.33334 19.9584H24.3333V17.375H8.89334C8.80494 17.375 8.72015 17.341 8.65764 17.2805C8.59513 17.2199 8.56001 17.1378 8.56001 17.0521C8.56001 16.9875 8.57334 16.9359 8.60001 16.8971L9.80001 14.7917H19.7333C20.7333 14.7917 21.6133 14.2492 22.0667 13.4613L26.84 5.10421C26.9333 4.89754 27 4.67796 27 4.45837C27 4.1158 26.8595 3.78726 26.6095 3.54503C26.3594 3.30279 26.0203 3.16671 25.6667 3.16671H5.94668L4.69334 0.583374M8.33334 21.25C6.85334 21.25 5.66668 22.3996 5.66668 23.8334C5.66668 24.5185 5.94763 25.1756 6.44772 25.6601C6.94782 26.1445 7.6261 26.4167 8.33334 26.4167C9.04059 26.4167 9.71886 26.1445 10.219 25.6601C10.7191 25.1756 11 24.5185 11 23.8334C11 23.1482 10.7191 22.4912 10.219 22.0067C9.71886 21.5222 9.04059 21.25 8.33334 21.25Z" fill="black" fill-opacity="0.75" />
                            </svg>
                        </i>
                   
                </li>

            </ul>

        </footer>

    </>

}