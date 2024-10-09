import './Home.scss'

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Content from './Components/content/Content';
import FeaturedBaner from '../../FeaturedBaner/FeaturedBaner';


export default function Home() {
    return (
        <div className='home'>
            <Header />

            <section className="featured-banner">
                <FeaturedBaner />
            </section>

            <Content />


            <Footer />

        </div>
    )
}