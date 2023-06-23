import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type:'recipe'
    })

    const paths = res.items.map(item =>{

        return{
            params:{slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback:false
    };
  }



  export async function getStaticProps({params}) {

    const {items} = await client.getEntries({
        content_type:'recipe',
        'fields.slug':params.slug
    })
    return{
        props:{recipe:items[0]}
    }
  
  }


   
  

const RecipeDetails = ({recipe}) => {
    const {title, featuredImage, shortDescription, slug, cookingSteps, method, ingredients, cookingTime} = recipe.fields;
    let steps = cookingSteps.split("\n").filter(el=>el!="");
    //steps = steps.filter(el=>el!="")
    //console.log(recipe)
    return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="page">
            
            <div className='banner-inner' style={{height:'600px', overflow:'hidden'}}>
                <Image
                    src={'https:'+featuredImage.fields.file.url}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                    className='img-responsive'
                    alt={title}
                />

                                    
            </div>

            <div className="p-2 mt-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
            <div className='banner-content-1 pb-4'>
                    <div>
                    <h1>{title}</h1>
                    <div className="row">
                        <div className="col-md-8"><div className="p-4">{documentToReactComponents(method)}</div></div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title">Ingredients</h5>
                                    <div className="p-3">{ingredients.map((ingredient, index)=>(<p key={"ingradient"+index}>{ingredient}</p>))}</div>
                                    <p className=""><strong>Cooking Time :</strong> {cookingTime} min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        {steps.map((step, index)=>(
                            <p key={"step"+index}>{step}</p>
                        ))}
                    </div>
                    </div>
            </div>
        </div>
    </>

    );
}
 
export default RecipeDetails;