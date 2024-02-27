import rjdv from '../assets/rjdv.jpg'
// behind never give up


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
                <h3>#Consistency - Year 2024</h3>
                <p className='tj'>Finally, I dedicated myself to my parents and brother again on 2024. I just want to love my family and myself. I have realized, girls are girls, we can not understad girls in entire life. So, stop the mindset of finding true love and then being successful. First be successful, you will find true love automatically. I love you so much maa, papa and bhai.  I will be successful not immediately but definitely. ❤️‍🔥</p>
                



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