import React from 'react'
import styles from './Contact.module.scss'
import classNames from 'classnames/bind'
import { faPhone, faHouseLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

const contact = [
    {
        icon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Điện thoại liên hệ',
        text: '0852407686'
    },
    {
        icon: <FontAwesomeIcon icon={faHouseLock} />,
        title: 'Địa chỉ',
        text: '267 Khương Trung, Thanh Xuân, Hà Nội'
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        title: 'Hòm thư điện tử',
        text: 'thanhls1235ls12@gmail.com'
    },
]

function Contact({ scrollView }) {
    const [show,setShow] = React.useState(false)

    const ref = React.useRef()

    React.useEffect (() => {
        const contact = ref.current
        if(scrollView >= contact.offsetTop && scrollView <= contact.offsetTop + contact.clientHeight){
            setShow(true)
        }
        else if(scrollView <= contact.offsetTop){
            setShow(false)
        }
    }, [scrollView])

  return (
    <div id='contact' className={cx('wrapper')}>
        <h1 className={cx('Contact_heading')}>Liên hệ</h1>
        <div ref={ref} className={cx('Contact_body')}>
            <div className={`${cx('image_box')} ${show ? 'transformTop' : ''}`}>
                <img className={cx('image')} src={`${process.env.PUBLIC_URL}/img/anh.png`} alt='logo' />
            </div>
            <ul className={`${cx('contact_box')} ${show ? 'transformLeft' : ''}`}>
                {contact.map((info,index) => (
                    <li key={index} className={cx('item')}>
                        <div className={cx('icon')}>
                            {info.icon}
                        </div>
                        <div className={cx('info')}>
                            <span className={cx('title')}>{info.title}</span>
                            <span className={cx('text')}>{info.text}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Contact