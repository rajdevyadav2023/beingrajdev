import rjdv from '../assets/rjdv.jpg'
// behind never give up
import me from '../assets/me.jpeg';
import men from '../assets/men.jpeg';
import family from '../assets/family.jpeg';

const Home = () => {
    return (
        <div className='home'>
            <div className="banner">
                <div className="img-box">
                    <img src={rjdv} alt="rajdev" />
                </div>
                <div className="banner-text">

                    <h1>#BeingRajdev </h1>
                    <p>Consistency is what transforms <br /> Average into Excellence</p>
                </div>
            </div>

           

            <div className='txt-container'>
                <h3>#Introduction  </h3>
                <p>Name : Rajdev Yadav</p>
                <p>Father&#39;s Name : Ramkaran Yadav</p>
                <p>Mother&#39;s Name : Gyanti Devi</p>
                <p>Brother&#39;s Name : Shikhar Yadav</p>
                <p>Date Of Birth : 06/06/2001</p>
                <p>State : Uttar Pradesh</p>
                <p>Country : India</p>
            </div>


          
            <div className="txt-container">
                <h3>#Consistency - 2024</h3>
                <img src={family} alt="consistency" className="hm" />
                <img src={men} alt="consistency" className="hm" />
                <img src={me} alt="consistency" className="hm" />
                



            </div>

            <footer>
                <h3>#BeingRajdev</h3>
                <p>The part of courage is simple consistency</p>
                <p>2019-2024</p>
            </footer>
        </div>
    )
}

export default Home