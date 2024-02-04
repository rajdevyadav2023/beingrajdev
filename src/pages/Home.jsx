import rjdv from '../assets/rjdv.jpg'

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
    </div>
  )
}

export default Home