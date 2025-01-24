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
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import axios from "axios"
import { LoadingDot } from '../utils/loading-spinner';

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

    const [projectList, setProjectList] = useState(null)
    const apiUri = process.env.REACT_APP_API_URI;
    useEffect(() => {
        const fetchList = async () => {
            try {
                await axios.get(`${apiUri}/api/v1/project/project-list`, {
                    withCredentials: true
                })
                    .then(res => {
                        setProjectList(res.data?.data)
                    })
            } catch (error) {
                console.log(error);
            }
        }
        fetchList()
    }, [])
    return (
        <div className='pf-project-page-cont-container'>
            <ScrollAnimContainer activeSec={'projects'} animDirection='top'>
                <div className='pf-p-head' >
                    <span >My Projects</span>
                </div>
            </ScrollAnimContainer>
            <ScrollAnimContainer activeSec={'projects'} animDirection='left'>
                <ul className='d-flex'>
                    {projectList && <Slider {...settings} className='pf-project-p-slider-box'>
                        {
                            projectList?.map((project, index) => {
                                return (
                                    project?.active &&
                                    <li className='pf-proj-p-slide-cont' key={index}>
                                        <ProjectItemCard onImgClick={getImg} project={project} />
                                    </li>
                                )
                            })
                        }
                    </Slider>}
                    {!projectList && <div className='pf-project-load-box'>
                        <div><LoadingDot width={50} /></div>
                        <div>please wait...</div>
                    </div>}
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
        onImgClick(true, project?.imageList, index)
    }
    const boxRef = useRef(null);

    const [openDesBox, setOpenDesBox] = useState(false);

    // Convert text to marked element
    const [projectDescription, setProjectDescription] = useState('')
    useEffect(() => {
        const markedContent = marked(project?.description || '')
        const purifiedContent = DOMPurify.sanitize(markedContent)
        setProjectDescription(purifiedContent)
    }, [project])
    return (
        <>

            <div className={`pf-project-p-cont-box pf-project-cont-box-anim ${openDesBox && 'pf-project-p-cont-box-disabled'}`} ref={boxRef}>
                <section className='pf-proj-p-cont-box-img-box'>
                    <Swiper {...swiperOptions} className='pf-project-p-img-slider-box' navigation >
                        {project?.imageList?.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='pf-proj-img-sl-box'>
                                        <img src={img?.imageUrl || require(`../assets/img/blank-image.png`)} alt="" draggable={false} onClick={() => imgClickHandler(index)} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
                <section className='pf-proj-p-cont-box-heading-box'>
                    <div><span>{project?.title || `Untitled ${project?._id}`}</span></div>
                </section>
                <section className='pf-proj-p-cont-box-des-box'>
                    <div onClick={() => setOpenDesBox(true)}>
                        <pre className='pf-proj-p-cont-box-des-line'>
                            <span className='pf-st-quote-symbol mx-1'><i className="ri-double-quotes-l"></i></span>
                            <span>{parse(projectDescription.slice(0, 300) + '...' || 'No description')}</span>
                            {project?.description?.length > 300 && <span className='fw-bold pf-col-fade mx-1 pf-cursor-pointer'>full description {'>'}</span>}
                        </pre>
                    </div>
                </section>
                <section className='pf-proj-p-cont-box-btn-box'>
                    {
                        project?.buttons?.map((button, index) => {
                            return (
                                button.buttonType === 'repository' ?
                                    button.active && <div key={index}>
                                        <a href={button.buttonUrl} target={'_blank'}>
                                            <button className="btn pf-btn-dblue">
                                                <span><i className="ri-github-fill"></i></span> <span>View Repository</span>
                                            </button>
                                        </a>
                                    </div> :
                                    button.active && <div key={index}>
                                        <a href={button.buttonUrl} target={'_blank'}>
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
                            project?.tagList?.map((tag, index) => {
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
                        <button onClick={() => setOpenDesBox(false)} className='pf-back-arrow-btn'><span><i className="ri-arrow-left-s-line fs-5"></i></span></button>
                    </div>
                    <div className='pf-proj-p-cont-box-heading-box'><span>{project?.title || `Untitled ${project._id}`}</span></div>
                </div>
                <div>
                    <pre className='pf-proj-p-cont-box-des-line'>
                        <span className='pf-st-quote-symbol mx-1'><i className="ri-double-quotes-l"></i></span>
                        <span>{parse(projectDescription || 'No description')}</span>
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
                    <button className='pf-img-popup-close-btn' onClick={() => onClose()}><span><i className="ri-close-large-line fs-4"></i></span></button>
                </div>
                <div>
                    <Swiper {...swiperOptions} className='pf-img-box-popup-swiper' navigation>
                        {
                            imgList?.map((img, index) => {
                                return (
                                    <SwiperSlide key={index} className='pf-img-popup-item-slide'>
                                        <div className='pf-img-show-box-img-box'><img src={img?.imageUrl || require(`../assets/img/blank-image.png`)} alt="" /></div>
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
