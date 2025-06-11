import { ArrowRight, Clock } from 'lucide-react';
import BgBanner from '../assets/BgBanner.jpg'

export function Banner(){
    return(
        //colocar imagem
        <div className="rounded-2xl p-10 mb-2 bg-[url(./assets/BgBanner.jpg)] bg-cover bg-no-repeat">
            <div className='flex items-center justify-center flex-col grayscale-0'>
                <h1 className='font-normal text-5xl/18 max-w-4xl text-white text-center '>Vishal Mega Mart planning a $1 billion IPO: Report</h1>
                <div className='w-full flex items-center justify-center gap-2 p-5 text-white'>
                   <div> 
                     <img className="h-14 w-14 rounded-full shadow-2xs bg-cover" src="https://www.agendartecultura.com.br/wp-content/uploads/2022/12/meneson.jpg" alt="foto profile" />
                   </div>
                    <div className='flex flex-col p-2 gap-2'>
                        <span className='font-bold'>Harsh Monic</span>
                        <span className='flex gap-2'> Mar 12, 2024 <Clock /> 5 min </span>
                    </div>                    
                </div>
                <button className='group/edit flex text-white font-semibold gap-1 cursor-pointer hover:text-slate-200'>
                        Read More
                        <ArrowRight className='group-hover/edit:translate-x-1 transition'/>
                    </button>
                
            </div>
        </div>



    )
}