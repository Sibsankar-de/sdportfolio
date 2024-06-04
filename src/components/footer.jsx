import React from 'react'
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='pf-footer-container'>
            <section>
                <div className='pf-p-head mb-0 fs-3'>
                    <span>Get in Touch</span>
                </div>
                <div>
                    <span>Crafting digital experiences that resonate. <br /> &copy;SibsankarDe {year}</span>
                </div>
                <div className='pf-footer-cont-box-container'>
                    <ul className='pf-footer-contact-box'>
                        <li><a href="https://www.facebook.com/sibsankar.de910"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/sibsankar-de-932b55240/"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/Sibsankar-de"><i className="bi bi-github"></i></a></li>
                    </ul>
                    <div><HashLink to="#services"><button className="btn pf-btn-vio">Hire me!</button></HashLink></div>
                </div>
            </section>
            <section className='pf-footer-cont-box'>
                <a href="mailto:sibsankarde910@gmail.com" className='pf-common-non-a'>
                    <div className='pf-footer-cont-item'>
                        <span><i className="ri-mail-fill fs-3"></i></span>
                        <span>Mail me</span>
                    </div>
                </a>
                <a href="tel:+917586059018" className='pf-common-non-a'>
                    <div className='pf-footer-cont-item'>
                        <span><i className="ri-phone-fill fs-3"></i></span>
                        <span>Call me</span>
                    </div>
                </a>
            </section>
        </div>
    )
}
