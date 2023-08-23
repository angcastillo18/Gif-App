import { useState } from "react"
import { AddCategory,GifGrid } from "./components"
// cuando tienes un index ya no es necesario definirlo en la ruta,automaticamente accede
// import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ONE PUNCH'])

    const onAddCategory=(newCategory)=>{ //*rule is not mutate the state
        if(categories.includes(newCategory)) return; //*validation
        setCategories([newCategory,...categories])
        // setCategories(cat=>[...cat,'Valorant'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory  onNewCategory={onAddCategory} />

        
        { categories.map((category)=>(
                    <GifGrid key={category} category={category} />
                )) 
        }
        

    </>
  )
}
