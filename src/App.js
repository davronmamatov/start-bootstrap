import rasim from './photo/rasim.png';
import shoppingcart from './photo/shoppingcart.png'
import star from './photo/star.png';
import arrow from './photo/arrow.png';
import github from './photo/github.png';
import inbox from './photo/inbox.png'; 
import './App.css';

function App() {
  return (
    <div>
      <div className='d-flex justify-content-between ps-3 pt-4 pe-3 pb-4 align-items-center'>
        <a href='#' className='a1'>
          <img src={arrow} className="me-2" alt="" width={15} height={20}/>
          Overview Page
        </a>
        <span>
          <a href="#" className='a1'><img src={github} alt="" width={20}/></a>
          <a href="#" className='a2'>
            <img src={inbox} alt="" width={20}/>
            Free Download
          </a>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </span>
      </div>
      <span className='hr'></span>
      <main>
        <header>
          <div className="start d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
              <h4>Start Bootstrap</h4>
              <a href ="#" className='home'>Home</a>
              <a href="#" className='about'>About</a>
              <div class="dropdown">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">All Products</a></li>
                  <hr />
                  <li><a class="dropdown-item" href="#">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                </ul>
              </div>
            </div>
            <button type='button' className='d-flex align-items-center'>
              <img src={shoppingcart} alt="" width={20} height={20}/>
                Cart
              <span className='noll'><b>0</b></span>
            </button> 
          </div>

        </header>
        <section id='section-1'>
          <h2 className='text-center'><b>Shop in style</b></h2>
          <p className='text-center'>With this shop hompeage template</p>
        </section>
        <section id='section-2'>
          <div className="container">
            <div className="d-flex mb-5 justify-content-between">
              <div class="card me-5 text-center">
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Fancy Product</h3>
                  <p class="card-text mb-4">$40.00 - $80.00</p>
                  <a href="#" class="btn mt-4">View options</a>
                </div>
              </div>
              <div class="card text-center">
                <span className='sale'><b>Sale</b></span>
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Special Item</h3>
                  <span className='d-flex justify-content-center'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </span>
                  <p class="card-text"><s>$20.00</s> $18.00</p>
                  <a href="#" class="btn">Add to card</a>
                </div>
              </div>
              <div class="card ms-5 text-center">
              <span className='sale'><b>Sale</b></span>
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Sale Item</h3>
                  <p class="card-text mb-4"><s>$50.00</s> $25.00</p>
                  <a href="#" class="btn mt-4">Add to card</a>
                </div>
              </div>
            </div>
            <div className="d-flex mb-5 justify-content-between">
              <div class="card me-5 text-center">
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Popular Item</h3>
                  <span className='d-flex justify-content-center'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </span>
                  <p class="card-text">$40.00</p>
                  <a href="#" class="btn">Add to cart</a>
                </div>
              </div>
              <div class="card text-center">
              <span className='sale'><b>Sale</b></span>
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Sale Item</h3>
                  <p class="card-text mb-4"><s>$50.00</s> $25.00</p>
                  <a href="#" class="btn mt-4">Add to card</a>
                </div>
              </div>
              <div class="card ms-5 text-center">
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Fancy Product</h3>
                  <p class="card-text mb-4">$120.00 - $280.00</p>
                  <a href="#" class="btn mt-4">View options</a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div class="card me-4 text-center">
              <span className='sale'><b>Sale</b></span>
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Special Item</h3>
                  <span className='d-flex justify-content-center'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </span>
                  <p class="card-text"><s>$20.00</s> $18.00</p>
                  <a href="#" class="btn">Add to cart</a>
                </div>
              </div>
              <div class="card ms-4 text-center">
                <img src={rasim} class="card-img-top" alt=""/>

                <div class="card-body">
                  <h3 class="card-title">Popular Item</h3>
                  <span className='d-flex justify-content-center'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </span>
                  <p class="card-text bg-secondary">$40.00</p>
                  <a href="#" class="btn">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='bg-dark'>
          <p className='text-center text-light pt-5 pb-5'>Copyright © Your Website 2022</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
