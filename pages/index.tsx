
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import { createClient } from 'contentful'
import RecipeCard from './../component/RecipeCard'
import SliderHome from './../component/SliderHome'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({content_type:'recipe'});

  return {
    props:{
      recipes:res.items
    }
  }

}



export default function Home({recipes}) {
  //console.log(recipes);
  const sliderItems = recipes.filter(item=>{return item.fields.slider===true});
  console.log(sliderItems)
  return (
    <>
      <SliderHome recipes={sliderItems} />
      <div className='container' style={{minHeight:'100vh'}}>        
          <div className='row mb-5'>

            {recipes.map(recipe =>(
              <RecipeCard key={recipe.sys.id} recipe={recipe} />
            ))}
            
          </div>
          
      </div>
  </>
  )
}
