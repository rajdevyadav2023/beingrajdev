import rjdv from '../assets/rjdv.jpg'
// behind never give up
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'

// results 2019
import r1 from '../assets/19.jpg'
import r2 from '../assets/192.jpg'
import r3 from '../assets/193.jpg'
import r4 from '../assets/194.jpg'
const Home = () => {
    return (
        <div>
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
                <h3>#Behind - Never Give Up</h3>
                <p>The family is the test of freedom; because the family is the only thing that the free man makes for himself and by himself.</p>
                <div className="gallery">
                    <img src={r1} alt="the main reason" />
                    <img src={r2} alt="the main reason" />
                    <img src={r3} alt="the main reason" />
                    <img src={r4} alt="the main reason" />
                </div>

                <p>Honestly, due to financial issues I had left schooling on 2017 when I was just in 8th grade, and decided never go back to school  and only work and earn only. </p>

                <p>I started working on a computer shop on 2017. It was a wedding card printing shop , doing online form registration, photocopy and many more.</p>

                <p>I used to do photocopy and learn how to do another tasks like - printing wedding cards, doing online registration.</p>

                <p>On that shop, I daily used to observe those children who came for print-outs related summer assignments and they spoke English very quickly while they were same as me ( 16s old girls / boys ) . Inside my soul and heart wanted to school too but my mind used to think that I would not go because fees... ... ... </p>

                <p>As the days passed, the shop owner started treating badly and use bad words. He did not give me enough respect as I used to deserved. I did not had any option because I really wanted to learn their arts, their works and their profession. hahaha..</p>

                <p>One day, a life insurance company agent came for photocopy of his clients documents. After his work he asked my name and educational background, he adviced me , <b>&#34; Beta! Zindgi abhi bahut badi hai, jao abhi thoda aur padh lo. Agar abhi padh loge toh isse acha kaam kar skte ho. &#34;</b>
                    <br /> <br />
                    Honestly, I became so speechless that time because I knew my family situations and his office was on 1st floor of that building and that shop was on ground floor. I was afraid if I did not leave that job , then he might say daily same line to me.  <br /> <br />

                    Finally, I stopped going from next day and never went again nor thought to go again. Because his words totally changed my mind and mindset. 👊
                </p>
            </div>

            <div className="txt-container">
                <h3>#Results - Year 2019</h3>
                <p>&#34;We are what we repeatedly do. <br /> Excellence, then, is not an act, but a habit.&#34;  &nbsp;&nbsp;&nbsp; - Aristotle</p>

                <div className="gallery">
                    <img src={b1} alt="the main reason" />
                    <img src={b2} alt="the main reason" />
                    <img src={b3} alt="the main reason" />
                    <img src={b4} alt="the main reason" />
                </div>

                <p>As we all know, hard work never goes waste and that&#39;s why I stand 1st in my entire village including 2nd in my entire school. That feeling was really amazing and unexplainable. <br /> <br />

                    Honestly, I had set target for 90+ percent but I scored only 88% . I was sad inside for not scoring 90+ . hahaha 😂 <br />
                    Because for those students who scores 90+ UP Govt gives them enough amount of  money for 11th and 12th (20k rupees) . But I was smiling with 88%. ( Greedy Mind! 🤣 )
                </p>
            </div>

            <div className="txt-container">
                <h3>#Twists - Year 2020</h3>
                <p>1. God gives more than luck if the intention is right. </p>
                <p>2. Pain doesn&#39;t destory you, it creates you.</p>
                <p>3. Honestly builds strong character.</p>
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