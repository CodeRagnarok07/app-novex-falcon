

export default function SideMenu({children ,state, setState, left }){

    return <aside 
    className={`absolute inset-0 
    transition-transform 
    duration-500
    ease-out 

    ${state ? "translate-x-0" : `translate-x-[${left ? "-" :"" }100%]`}`}>
        <div onClick={()=>setState(!state)}  className='-z-50 absolute inset-0 bg-black bg-opacity-50'/>
        
        
        <div 
        className={`
        bg-dark rounded-r-[1rem] min-h-screen 
        ${left ? " " :" ml-auto " } 
        transition-all 
        ${state ? "w-4/5" : "w-full"} `}>

            {children}

        </div>
    </aside>
}