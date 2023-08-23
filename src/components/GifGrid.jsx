
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2 className="">Cargando...</h2>)
                // isLoading ? 
                //     (<h2 className="">Cargando...</h2>)
                //     :null
            }
            
            <div className="card-grid">
                {/* <li key={id}>{title}</li> */}
                {
                    images.map((image)=>(
                        <GiftItem 
                            key={image.id} 
                            /* con esto esparzo todas las demas props */
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
