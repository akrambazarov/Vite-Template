
import './App.css';
import './index.css';
import Cart from './assets/Icons/Cart';
import BurgerMenu from './assets/Icons/BurgerMenu';

function Header() {
  return (
    <header className="container header-top flex j-space-b pad-container">
    <div className="logo">
        <div className="logo-grid">
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
            <div className="logo-dot"></div>
            <div className="logo-dot-red"></div>
        </div>
    </div>
    <div className="flex">
    <span className="select-wrapper">
    <span className='color-red font-josefin'>Restaurant</span>
    </span>
    </div>
    <div className="menu-control flex gap-35">
        <label className="container">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

        </label>
        <span className="icon-control pos-r">
            <span></span>
        <button className="nav-item">
            <Cart/>
        </button>
        </span>
        <span className="icon-control">
        <label className="hamburger">
        <input type="checkbox" />
        <BurgerMenu/>
        </label>

        </span>
    </div>
    </header>
  );
}

export default Header;