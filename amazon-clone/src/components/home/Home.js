import './Home.css'
import Product from '../product/Product'
import CarouselComponent from '../carousel/Carousel'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <CarouselComponent />
        <div className='home-row'>
          <Product title='The lean startup: How Constant Innovation Creates Radically Successful Business Paperback' price={11.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg' rating={3} />
          <Product id='49538094' title='Duke Blue Devils NCAA 29.5" Full Size Rubber Outdoor Basketball by Rawlings' price={27.99} image='https://m.media-amazon.com/images/I/61bHbOVPhEL._AC_UL640_QL65_.jpg' rating={4} />
        </div>
        <div className='home-row'>
          <Product id='4903850' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={1199.99} image='https://m.media-amazon.com/images/I/71916r38cNL._AC_SX679_.jpg' rating={3} />
          <Product id='23445930' title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' price={98.99} image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' rating={5} />
          <Product id='3254354345' title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' price={598.99} image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' rating={4} />
        </div>
        <div className='home-row'>
          <Product id='90829332' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' rating={4} />
        </div>
      </div>
    </div>
  )
}

export default Home
