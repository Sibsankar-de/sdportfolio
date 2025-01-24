import React, { useEffect, useState } from 'react'
import upworkLogo from "../assets/svg/upwork.svg"
import fiverrLogo from "../assets/svg/fiverr.svg"
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import { LoadingDot } from '../utils/loading-spinner';
import { useActiveSection } from '../hooks/activeSection';
import { ScrollAnimContainer } from '../utils/scroll-anim-container';



export const ServicesPage = () => {
    const activeSection = useActiveSection();

    const [messageObj, setMessageObj] = useState({ email: '', message: '' });
    const [messageErr, setMessageErr] = useState({ email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const mailSubmitHandler = async (e) => {
        e.preventDefault();
        if (messageObj.message.length >= 15 && messageObj.email) {
            try {
                setLoading(true);
                await emailjs.send('service_bs90gme', 'template_lg0qtln', {
                    'to_name': 'Sibsankar',
                    'from_name': messageObj.email.slice(0, messageObj.email?.indexOf('@')),
                    'message': messageObj.message,
                    'email_from': messageObj.email,
                }, 'zZMCdYgvWmJGHo0iT')
                    .then(() => {
                        Swal.fire({
                            text: "Message send successfully ! ✌️",
                            icon: "success",
                        })
                        setMessageObj({ email: '', message: '' })
                        setLoading(false)
                    })
            } catch (error) {
                setLoading(false);
                Swal.fire({
                    text: "Failed to send message! 😶",
                    icon: "error",
                })
            }

            setMessageErr({ ...messageErr, message: "", email: "" })
        }
        else {
            Swal.fire({
                text: "All fields are required! 😶",
                icon: "warning",
                toast: true,
                position: 'top',
                timer: 2500,
                showConfirmButton: false
            })
            setMessageErr({ ...messageErr, message: "Message must contain atleast 15 letters 😓" })
        }
    }

    useEffect(() => {
        if (messageObj.message.length >= 15) setMessageErr({ ...messageErr, message: "" })
    }, [messageObj])

    return (
        <div className='pf-service-page-cont-container'>
            <section className='pf-service-p-cont-box'>
                <div className='pf-p-head mb-5 text-center'>
                    <span>Hire me on!</span>
                </div>
                <div className='pf-s-p-hme-opt-box'>
                    <ScrollAnimContainer activeSec={'services'} animDirection='left'>
                        <a href="https://www.upwork.com/freelancers/~01dadb3ad61f410a9d" target='_blank'>
                            <div className='pf-service-p-hm-logo-box'>
                                <img src={upworkLogo} alt="" draggable={false} />
                            </div>
                        </a>
                    </ScrollAnimContainer>
                    <ScrollAnimContainer activeSec={'services'} animDirection='right'>
                        <a href="https://www.fiverr.com/sibsankar_de" target='_blank'>
                            <div className='pf-service-p-hm-logo-box'>
                                <img src={fiverrLogo} alt="" draggable={false} />
                            </div>
                        </a>
                    </ScrollAnimContainer>
                </div>
            </section>
            <ScrollAnimContainer className='pf-service-p-cont-box d-grid gap-5' activeSec={'services'} animDirection='bottom'>
                <div className='text-center'>
                    <div className='pf-p-head mb-0'>Contact me</div>
                    <div>Freely contact with me through Texting or Calling</div>
                </div>
                <div>
                    <section className='pf-common-prop gap-4'>
                        <div>
                            <a href="mailto:sibsankarde910@gmail.com" target={'_blank'} className='pf-serv-p-cont-m-link'>
                                <div className='pf-serv-p-contact-me-cont pf-mail-bg-grad'>
                                    <span><i className="ri-mail-add-fill"></i></span>
                                    <span>Mail me</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://m.me/sibsankar.de910" target={'_blank'} className='pf-serv-p-cont-m-link'>
                                <div className='pf-serv-p-contact-me-cont pf-mes-bg-grad'>
                                    <span><i className="ri-messenger-fill"></i></span>
                                    <span>Text me</span>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className='pf-cont-sec-form-box mb-5'>
                    <div className='mb-0 text-success'><span><i className="ri-information-2-line"></i></span> <span>Please use a valid email to get reply</span></div>
                    <form action="" className='d-grid gap-3' onSubmit={mailSubmitHandler}>
                        <div>
                            {messageObj.email.length > 0 &&
                                !messageErr.email ? <span className='pf-input-aft-focus'>Email</span> : <span className='pf-input-aft-focus text-danger'>{messageErr.email}</span>
                            }
                            <input type="email" className='form-control' placeholder='Enter em@il' spellCheck={false} onChange={e => setMessageObj({ ...messageObj, email: e.target.value })} name={'email_from'} value={messageObj.email} />
                        </div>
                        <div>
                            {messageObj.message.length > 0 &&
                                !messageErr.message ? <span className='pf-input-aft-focus'>Message</span> : <span className='pf-input-aft-focus text-danger'>{messageErr.message}</span>
                            }
                            <textarea className='form-control' placeholder='Leave a message ' name='message' onChange={e => setMessageObj({ ...messageObj, message: e.target.value })} value={messageObj.message} />
                        </div>
                        <div className='pf-js-s-end'><button className="btn btn-success rounded-3 d-flex gap-2" type='submit' disabled={loading}>{loading && <span><LoadingDot width={20} /></span>} <span>Send</span></button></div>
                    </form>
                </div>
            </ScrollAnimContainer>
        </div>
    )
}
