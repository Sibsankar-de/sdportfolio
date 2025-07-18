import React, { useEffect, useState } from 'react'
import resumeFile from '../assets/pdf/resume.pdf'
import { useActiveSection } from '../hooks/activeSection'
import { ScrollAnimContainer } from '../utils/scroll-anim-container'
import axios from 'axios'
import { LoadingDot } from '../utils/loading-spinner'

export const AboutPage = () => {
    // const apiUri = process.env.REACT_APP_API_URI;
    // const [resume, setResume] = useState(null);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const fetchList = async () => {
    //         try {
    //             setLoading(true);
    //             await axios.get(`${apiUri}/api/v1/user/get-resume/${process.env.REACT_APP_USER_ID}`, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     setResume(res.data?.data?.resume);
    //                     setLoading(false);
    //                 })
    //         } catch (error) {
    //             setLoading(false);
    //             console.log(error);
    //         }
    //     }
    //     fetchList()
    // }, [])

    const resumeUrl = `https://docs.google.com/document/d/14QY99Pt6_GQLQmfdfW2SAQxGTqeo4z5kgGP79xDqD3I/edit?usp=sharing`;

    return (
        <>
            <div className='pf-about-cont-container' >
                <ScrollAnimContainer className='pf-common-prop pf-ab-page-img-box' activeSec={'about'} animDirection='left' >
                    <div><img src={require('../assets/img/profile-image-short-frame.png')} alt="" className='pf-about-p-pf-img' draggable={false} onContextMenu={e => e.preventDefault()} /></div>
                    <div className='pf-about-p-pf-img-back'></div>
                </ScrollAnimContainer>
                <ScrollAnimContainer className='pf-about-p-content-box' activeSec={'about'} animDirection={'right'}  >
                    <div className='pf-p-head'>
                        <span >About Me</span>
                    </div>
                    <div className='pf-ab-p-des-box'>
                        <div>
                            <span><span className='fs-5 fw-bold'>H</span>ello! Welcome to my portfolio. I’m Sibsankar De, a passionate <span className='pf-und-line'>Full-stack Web developer</span> based in India. With a blend of creativity, technical expertise, and a dash of curiosity, I embark on exciting projects that push boundaries.</span>
                        </div>
                        <div className='pf-ab-p-sub-h'><span> My Journey</span></div>
                        <div>
                            <span> My journey began when I discovered my love for Web Developement during my school life. From tinkering with code to designing captivating user interfaces, I’ve honed my skills across various domains. Whether it’s crafting elegant websites or solving complex problems, I thrive on the thrill of creation.</span>
                        </div>
                        <div className='pf-ab-p-sub-h'><span>What Drives Me</span></div>
                        <div>
                            <span>I believe that every line of code has the power to shape experiences. As a Web developer, I’ve had the privilege of collaborating with talented teams, transforming ideas into reality. Curiosity fuels my passion—I’m always learning, exploring, and seeking inspiration from unexpected sources.</span>
                        </div>
                        <div className='mt-1'><a href={resumeUrl} target="_blank" download={"sibsankar_frontenddev_resume"} ><button className="btn pf-btn-sblue" >Resume</button></a></div>
                    </div>
                </ScrollAnimContainer>
            </div>
        </>
    )
}
