import Image from 'next/image'
import Link from 'next/link';

const Header = () =>{
    return(<header>
        <div className='top-header'>
            <div className='container'>                
                Welcome to CookIt, Find and Cook it now.
            </div>                
        </div>
        <div className='p-3 text-center'>
        <Link href="/">
            <Image
                className=""
                src="/../public/cook-it-v2x300.png"
                alt="CookIt"
                width={300}
                height={99}
                priority
            />
        </Link>
        </div>
    </header>);
}

export default Header;