import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = ({recipe}) => {
    const {title, slug, cookingTime, shortDescription, thumbnail} = recipe.fields;
    
    return (<div className='col-lg-4 col-md-6 mt-4'>
    <div className='card'>
        <Link href={"/recipes/"+slug} className="thumbnail">
        <Image
            className=""
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            alt={title}
        />
        <div className='rc-time'>
            <div className='rc-item'>{`Time : ${cookingTime} min`}</div>
        </div>
        </Link>
        <div className='card-body pt-4'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{shortDescription}</p>
            <Link href={"/recipes/"+slug} className='btn btn-primary btn-custom-primary'>COOK IT Now</Link>
        </div>
    </div>
</div>);
}
 
export default RecipeCard;