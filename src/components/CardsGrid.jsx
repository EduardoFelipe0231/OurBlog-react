import {CardsGridBox} from "./CardsGridBox"
import CardsList from "../CardsList"

export function SectionCards(){
    return(
        <div className="grid grid-cols-2 gap-5 pt-6 max-xl:grid-cols-1">
            {
                CardsList.map((item) =>{
                    return(
                        <CardsGridBox 
                            key={item.id}
                            date={item.date}
                            time={item.time}
                            text={item.text}
                            imgUrl={item.imgUrl}
                            imgAlt={item.imgAlt}
                            name={item.name}                        
                        />
                    )
                })
            }
        </div>
    )
}