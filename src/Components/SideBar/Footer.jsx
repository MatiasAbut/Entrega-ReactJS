import React from 'react';

const Footer = () => {
    return (
        <>
                  <aside className="footer-section">
        <p className="">
          Copyright © 2022-2022 CandyShop. All rights reserved. Designed &amp;
          developed by Matias Abut.
        </p>
        <br />
        <ul className="">
          <li>
            <a href="https://wa.me/######" className="">
              <img
                src="Multimedia/whatsapp-logo-11.png"
                alt="whatsapp logo"
                width={30}
                height={30}
              />
              Whatsapp
            </a>
          </li>
          <br />
          <li>
            <a href="#" className="">
              <img
                src="Multimedia/instagramlogo.png"
                alt="instagram logo"
                width={30}
                height={30}
              />
              Instagram
            </a>
          </li>
          <br />
          <li>
            <a href="#" className="">
              <img
                src="Multimedia/yotubelogo.png"
                alt="youtube logo"
                width={35}
                height={25}
              />
              Youtube
            </a>
          </li>
        </ul>
      </aside>
        </>
    );
}

export default Footer;
