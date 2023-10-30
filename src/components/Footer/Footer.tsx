import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__top">
          <div className="footer__top--item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="footer__top--item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="footer__top--item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
              incididunt ut labore etdolore.
            </span>
          </div>
          <div className="footer__top--item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
              incididunt ut labore etdolore.
            </span>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom--left">
            <span className="logo">Store</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="footer__bottom--right">
            <img src="img/payment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
