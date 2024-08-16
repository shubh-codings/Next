import RecipeList from "@/components/recipe-list/RecipeList";
import Link from "next/link";

export const metadata = {
    title:'RecipeList',
}

async function fetchRecipeList(){
    try {
        const response = await fetch('https://dummyjson.com/recipes')

        const data = await response.json()
        return data.recipes
        
    } catch (error) {
        // console.log(error)
        throw new Error('Could not fetch data.',error)
    }
}

export default async function Recipes() {

    const recipeList = await fetchRecipeList()
    return (
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl mb-12 text-gray-600 font-bold">Recipe List</h2>
            {/* <Link href={'/'} className="underline text-blue-700">Home</Link> */}
            <RecipeList list={recipeList}/>
        </div>
    );
}