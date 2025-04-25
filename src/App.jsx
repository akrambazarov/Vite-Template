import food from './assets/food1.png';
import food2 from './assets/food2.png';
import imgSlide from './assets/imgSlide11.png';
import imgSlide2 from './assets/imgSlide2.png';
import ketchup from './assets/sauce bootle 2.png';
import PopularFood from './assets/img/1.png'
import vector from './assets/vector.png';
import p2 from './assets/2.png';
import p3 from './assets/3.png';
import f2 from './assets/11Vector.png';
import Smile from './assets/Icons/Smile';
import Instagram from './assets/Icons/Instagram';
import Twitter from './assets/Icons/Twitter';
import FaceBookIcon from './assets/Icons/faceBookIcon';
import Play from './assets/Icons/play';
import Vector from './assets/Icons/Vector';
import Delivery from './assets/Icons/Delivery';
import VectorTwo from './assets/Icons/VectorTwo';
import Mouth from './assets/Icons/Mouth';
import Header from './header';
import './App.css';
import Footer from './footer';
import Food from './assets/Icons/food';

function App() {
  return (
    <div className='content-all'>
      <Header/>
      <div className="main grid pad-container">
        <aside className='descMain'>
          <div className="headerTop">
            <h4>_Restaurant</h4>
          </div>
          <div className='flex title-line'>
            <h1>Good F</h1>
            <img src={food} alt="Food icon" className="food-icon"/>
            <img src={food2} alt="Food icon" className="food-icon"/>
            <h1>d</h1>
          </div>
          <div className='flex title-line'>
            <h1>Good M</h1>
            <div className="smiles flex">
              <Smile/>
              <Smile/>
            </div>
            <h1>d</h1>
          </div>
          <p className='description'>
            The food palace is an neighborhood restaurant serving seasonal global cuisine driven by the faire.
          </p>
          <button className='boxShadowY btn'>
            Explore food menu
          </button>
          <div className="socialIcons flex">
            <FaceBookIcon/>
            <Instagram/>
            <Twitter/>
          </div>
        </aside>
        <main className="mainBlock">
          <div className="imgBorder">
            <img src={imgSlide} alt="Main dish" className='main-image boxShadowY'/>
          </div>
          <div className="imgBottom">
            <img src={imgSlide2} alt="Dish 1" className="small-image"/>
            <img src={food} alt="Dish 2" className="small-image"/>
            <img src={food2} alt="Dish 3" className="small-image"/>
          </div>
        </main>
      </div>
      <section>
        <div className="hero-content flex pad-container">
          <div className="hero-image">
            <img src={ketchup} alt="Кетчуп" className="ketchup"/>
            <Vector/>
            
            <div className="plate-shape">
              <img src={vector} alt="Кимчи" className="kimchi"/>
              <button className="play-btn"><Play/></button>
            </div>
          </div>
          <div className="hero-text">
            <h5>About us</h5>
            <h1>Simple Way of Eating Delicious</h1>
            <p>Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter or in the</p>
            <button className="btn mg-t-10">Explore our story</button>
          </div>
        </div>
      </section>
      <section className="services">
        <div className='imgInBorder'>
          <img src={p2} alt="" />
          <img src={p3} alt="" />
        </div>
        <span className='headerTop'>Features</span>
        <h2>Our Awesome Services</h2>
        <div className="service-cards">
          <div className="card">
            <div className="icon"><Food/></div>
            <h4>Quality Food</h4>
            <p>Keep healthy food readily available...</p>
          </div>
          <div className="card">
            <div className="icon"><Mouth/></div>
            <h4>Super Taste</h4>
            <p>Keep healthy food readily available...</p>
          </div>
          <div className="card">
            <div className="icon"><Delivery/></div>
            <h4>Fast Delivery</h4>
            <p>Keep healthy food readily available...</p>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <main className="container">
          <section className="popular-items">
            <div className="section-header">
              <p className="category">Recipes</p>
              <div className="title-wrapper">
                <h2>Most Popular Items</h2>
                <img src={PopularFood} alt="Food icon" className="title-icon"/>
              </div>
            </div>
            <div className="menu-grid pad-container">
              <div className="menu-item">
                <img src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg" alt="Flame-boiled dish"/>
                <div className="item-details">
                  <div className="item-header">
                    <h3>Flame-boiled dish</h3>
                    <span className="rating">★ 8.5</span>
                  </div>
                  <div className="item-footer">
                    <button className="add-to-cart">ADD TO CART</button>
                    <span className="price">$ 19.99</span>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" alt="Peach Melba dish"/>
                <div className="item-details">
                  <div className="item-header">
                    <h3>Peach Melba dish</h3>
                    <span className="rating">★ 9.5</span>
                  </div>
                  <div className="item-footer">
                    <button className="add-to-cart">ADD TO CART</button>
                    <span className="price">$ 23.99</span>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg" alt="Delmonico Steak dish"/>
                <div className="item-details">
                  <div className="item-header">
                    <h3>Delmonico Steak dish</h3>
                    <span className="rating">★ 8.0</span>
                  </div>
                  <div className="item-footer">
                    <button className="add-to-cart">ADD TO CART</button>
                    <span className="price">$ 18.99</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="see-more">See More Recipes</button>
          </section>
        </main>
      </section>
      <section className="cta-section flex pad-container">
       
        <div className="image-container">
        <VectorTwo/><img src={f2} alt="Delicious food" />
          
        </div>
        <div className="content">
          <h5>Take away</h5>
          <h2>Simple Way To Order Your Food</h2>
          <p>
            Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter or in the cupboard.
          </p>
          <div className="store-buttons flex">
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store"/>
                App Store
              </a>
              <a href="#" className="app-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play"/>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;