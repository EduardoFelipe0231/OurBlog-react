import { Clock } from "lucide-react";

export function CardsGridBox({imgUrl,imgAlt,date,time,text, name }){
    return(
        <div className="bg-white p-5 flex items-center gap-10 border rounded-2xl border-zinc-300 drop-shadow-ms hover:bg-zinc-100 transition ease-in-out cursor-pointer">
            <div className="overflow-hidden rounded-md"> 
                <img className="w-45 h-30 bg-center" src={imgUrl} alt={imgAlt} />               
            </div>
            <div className="flex-1/2 flex flex-col h-full py-1 gap-3 font-normal ">
                <div className="flex gap-2 text-zinc-700 items-center">
                    <span>{date}</span>
                    <Clock size={17} className="text-zinc-900 font-bold" />
                    <span>{time}</span>
                </div>
                <p className="font-bold text-zinc-800 text-lg/7">{text}</p>
                <div className="flex gap-3">
                    <img className="w-5 h-5 rounded-full bg-cover bg-center bg-no-repeat"  src="https://www.agendartecultura.com.br/wp-content/uploads/2022/12/meneson.jpg" alt="foto profile"  />
                    <span className="text-zinc-700 text-sm">{name}</span>
                </div>
            </div>
        </div>
    )
}