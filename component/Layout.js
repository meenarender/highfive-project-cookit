
import Header from './Header';
//import SliderHome from './SliderHome';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import cardStyles from '@/styles/Card.module.css'


export default function Layout({children}){
    return(
    <>
    <Head>
        <title>CookIt</title>
    </Head>
        <div className='container-full'>
            <Header></Header>

            <div className='container' style={{minHeight:'100vh'}}>
                {children}
            </div>
            
            <Footer></Footer>

        </div> 
    </>       
    )
}