import RecipeItems from "@/components/recipe-item/RecipeItems"

export const metadata = {
    title:'Recipe Details',
}

async function getRecipeDetail(id) {

    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error('Problem Occured While fetching Recipe Details')
    }
    
}


export default async function Page({params}) {

    const recipeDetail = await getRecipeDetail(params.detail)
    // console.log(recipeDetail)

    return (
        <div className="">
            
            {recipeDetail && <RecipeItems item = {recipeDetail}/>}
        </div>
    );
}