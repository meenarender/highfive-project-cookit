import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const SliderHome = ({recipes})=>{
    //const {title, featuredImage, shortDescription} = sliderItems.fields;
    return(
        <div style={{marginBottom:'30px'}}>
                {/* Hello World. */}
                <Slider {...settings}>
                    {recipes.map(recipe=>{
                        const {title, featuredImage, shortDescription, slug} = recipe.fields
                        return(
                        <div key={featuredImage.sys.id}>
                            <div className='banner-inner dark-overlay' style={{height:'350px', overflow:'hidden'}}>
                                <Image
                                    src={'https:'+featuredImage.fields.file.url}
                                    width={featuredImage.fields.file.details.image.width}
                                    height={featuredImage.fields.file.details.image.height}
                                    className='img-responsive'
                                    alt={title}
                                />
                                <div className='banner-content'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                        <h1>{title}</h1>
                                        <p>{shortDescription}</p>
                                        <Link href={"/recipes/"+slug} className='btn btn-primary btn-custom-primary'>View Recipe</Link>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>

                        </div>)
                    })}
                    {/* <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                    <div>
                    <h3>5</h3>
                    </div>
                    <div>
                    <h3>6</h3>
                    </div> */}
                </Slider>
        </div>
    )
}

export default SliderHome;