import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import parse from 'html-react-parser';

import projectData from '../json/projectData.json';
import tagIconData from '../json/tagLogoData.json';
import { useActiveSection } from '../hooks/activeSection';
import { ScrollAnimContainer } from '../utils/scroll-anim-container';

export const ProjectPage = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [showImgPopup, setShowImgPopup] = useState(false);
    const [imgList, setImgList] = useState([]);
    const [intIndex, setInitIndex] = useState(0);
    const getImg = (state, list, index) => {
        setShowImgPopup(state);
        setImgList(list);
        setInitIndex(index);
    }

    const popupRef = useRef(null)

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.overflowY = showImgPopup ? 'hidden' : 'scroll';
    }, [showImgPopup])

    return (
        <div className='pf-project-page-cont-container'>
            <ScrollAnimContainer activeSec={'projects'} animDirection='top'>
                <div className='pf-p-head' >
                    <span >My Projects</span>
                </div>
            </ScrollAnimContainer>
            <ScrollAnimContainer activeSec={'projects'} animDirection='left'>
                <ul className='d-flex'>
                    <Slider {...settings} className='pf-project-p-slider-box'>
                        {
                            projectData.map((project, index) => {
                                return (
                                    <li className='pf-proj-p-slide-cont' key={index}>
                                        <ProjectItemCard onImgClick={getImg} project={project} />
                                    </li>
                                )
                            })
                        }
                    </Slider>
                </ul>
            </ScrollAnimContainer>
            {showImgPopup && <ImgShowPopup onClose={() => setShowImgPopup(false)} openState={showImgPopup} popupRef={popupRef} imgList={imgList} initIndex={intIndex} />}
        </div>
    )
}

const ProjectItemCard = ({ project, onImgClick }) => {
    const swiperOptions = {
        slidesPerView: 1,
        modules: [Navigation, Pagination],
        pagination: {
            dynamicBullets: true,
            clickable: true,
        }
    }

    // useEffect(()=>{

    // })

    const imgClickHandler = (index) => {
        onImgClick(true, project?.imgList, index)
    }
    const boxRef = useRef(null);

    const [openDesBox, setOpenDesBox] = useState(false);
    return (
        <>

            <div className={`pf-project-p-cont-box pf-project-cont-box-anim ${openDesBox && 'pf-project-p-cont-box-disabled'}`} ref={boxRef}>
                <section className='pf-proj-p-cont-box-img-box'>
                    <Swiper {...swiperOptions} className='pf-project-p-img-slider-box' navigation >
                        {project.imgList?.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='pf-proj-img-sl-box'>
                                        <img src={require(`../assets/img/${img?.imgUrl}`)} alt="" draggable={false} onClick={() => imgClickHandler(index)} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
                <section className='pf-proj-p-cont-box-heading-box'>
                    <div><span>{project.title || `Untitled ${project._id}`}</span></div>
                </section>
                <section className='pf-proj-p-cont-box-des-box'>
                    <div onClick={() => setOpenDesBox(true)}>
                        <pre className='pf-proj-p-cont-box-des-line'>
                            <span className='pf-st-quote-symbol mx-1'><i className="ri-double-quotes-l"></i></span>
                            <span>{parse(project?.description.slice(0, 300) || 'No description')}</span>
                            {project?.description?.length > 300 && <span className='fw-bold pf-col-fade mx-1 pf-cursor-pointer'>...more</span>}
                        </pre>
                    </div>
                </section>
                <section className='pf-proj-p-cont-box-btn-box'>
                    {
                        project.buttons?.map((button, index) => {
                            return (
                                button.type === 'repository' ?
                                    <div key={index}>
                                        <a href={button.url} target={'_blank'}>
                                            <button className="btn pf-btn-dblue">
                                                <span><i className="ri-github-fill"></i></span> <span>View Repository</span>
                                            </button>
                                        </a>
                                    </div> :
                                    <div key={index}>
                                        <a href={button.url} target={'_blank'}>
                                            <button className="btn pf-btn-dsblue ">
                                                <span><i className="ri-global-line"></i></span> <span>Visit Website</span>
                                            </button>
                                        </a>
                                    </div>
                            )
                        })
                    }
                </section>
                <section className='pf-proj-p-cont-box-tag-box'>
                    <ul>
                        {
                            project.tags?.map((tag, index) => {
                                const ico = tagIconData.find(e => tag?.toLowerCase().includes(e.text.toLowerCase()))
                                return (
                                    <li key={index}>
                                        {ico && <span className='mx-1'>{parse(ico.xml) || ''}</span>}
                                        <span>{tag}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>

            <div className={`pf-project-p-cont-box pf-project-full-des-box pf-project-cont-box-anim ${!openDesBox && 'pf-project-p-cont-box-disabled'}`} >
                <div className='d-flex gap-3 align-items-center'>
                    <div>
                        <button onClick={() => setOpenDesBox(false)} className='pf-back-arrow-btn'><span><i class="ri-arrow-left-s-line fs-5"></i></span></button>
                    </div>
                    <div className='pf-proj-p-cont-box-heading-box'><span>{project.title || `Untitled ${project._id}`}</span></div>
                </div>
                <div>
                    <pre className='pf-proj-p-cont-box-des-line'>
                        <span className='pf-st-quote-symbol mx-1'><i className="ri-double-quotes-l"></i></span>
                        <span>{parse(project?.description || 'No description')}</span>
                    </pre>
                </div>
            </div>
        </>
    )
}

const ImgShowPopup = ({ onClose, openState, popupRef, imgList, initIndex }) => {

    const swiperOptions = {
        slidesPerView: 1,
        initialSlide: initIndex || 0,
        modules: [Navigation, Pagination],
        pagination: {
            dynamicBullets: true,
            clickable: true,
        }
    }

    return (
        <div className='pf-img-show-popup-back fade-in-anim' >
            <div className='pf-img-show-popup-container' ref={popupRef}>
                <div className='pf-img-show-popup-close-btn-box'>
                    <button className='pf-img-popup-close-btn' onClick={() => onClose()}><span><i class="ri-close-large-line fs-4"></i></span></button>
                </div>
                <div>
                    <Swiper {...swiperOptions} className='pf-img-box-popup-swiper' navigation>
                        {
                            imgList?.map((img, index) => {
                                return (
                                    <SwiperSlide key={index} className='pf-img-popup-item-slide'>
                                        <div className='pf-img-show-box-img-box'><img src={require(`../assets/img/${img?.imgUrl}`)} alt="" /></div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
