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
                src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022.appspot.com/o/Imagenes%2Fwhatsapp-logo-11.png?alt=media&token=9169cf8e-0ed3-4f4d-91d5-52887f34854b"
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
                src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022.appspot.com/o/Imagenes%2Finstagramlogo.png?alt=media&token=7bd7f7d2-a72b-4cac-8f89-f9e4af8d4691"
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
                src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022.appspot.com/o/Imagenes%2Fyotubelogo.png?alt=media&token=c8538e6c-bbbf-40d0-b871-56ed01b9b56e"
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
