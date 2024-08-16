import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"


function RecipeList({list}) {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {list && list.length>0 ?list.map(recipe=><Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
        <Card>
            {/* <CardHeader>
                <CardTitle className='text-lg text-bold '>{recipe.name}</CardTitle>
            </CardHeader> */}
            <CardContent className='bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all'>
                <div className="w-full aspect-w-16 aspect-h-8 lg:h-80 relative">
                    <img src={recipe.image} alt="recipe.name"  className="h-full w-full object-cover object-top"/>
                </div>
                <div className="py-4">
                    <h3 className="text-xl text-nowrap font-bold text-gray-700">{recipe.name}</h3>
                </div>
                <div className="mt-1 flex items-center flex-wrap gap-2">
                    <p className="text-lg text-gray-600">{recipe.rating}</p>
                    <div className="ml-auto">
                    <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
                    
                </div>
                    
                </div>
                

            </CardContent>
        </Card>
      </Link>)
       :null}
    </div>
  )
}

export default RecipeList
