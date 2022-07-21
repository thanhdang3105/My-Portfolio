import React from 'react'
import styles from '../BodyContent.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles)

const fontend = [
    {
        name: 'Html',
        src: 'html.svg'
    },
    {
        name: 'Css',
        src: 'css.svg'
    },
    {
        name: 'JavaScript',
        src: 'javaScript.svg'
    },
    {
        name: 'Sass',
        src: 'sass.svg'
    }
]
const backend = [
    {
        name: 'MongoDB',
        src: 'mongodb.svg'
    },
    {
        name: 'Firebase',
        src: 'firebase.png'
    }
]
const libraries = [
    {
        name: 'React JS',
        src: 'reactJs.svg'
    },
    {
        name: 'Redux',
        src: 'redux.svg'
    },
    {
        name: 'Nodejs',
        src: 'nodejs.svg'
    },
    {
        name: 'Ant Design',
        src: 'antd.png'
    },
    {
        name: 'Material',
        src: 'material.svg'
    },
    {
        name: 'Socket.IO',
        src: 'socket-io.svg'
    },
]

function Technologies({ scrollView }) {
    const [show,setShow] = React.useState(false)

    const ref = React.useRef()

    React.useEffect(() => {
        const tech = ref.current
        if(scrollView >= tech.offsetTop && scrollView <= tech.offsetTop + tech.clientHeight){
            setShow(true)
        }
        else if(scrollView <= tech.offsetTop){
            setShow(false)
        }
    }, [scrollView])

  return (
    <div id="technologies" className={cx('tech_wrapper')}>
        <h1 className={cx('tech_heading')}>Kỹ năng</h1>
        <div className={cx('tech_wrapper-desc')}>
        <span className={cx('tech_desc')}>Đây là một số công nghệ mà tôi đã học được <br/>cho đến nay thông qua một số dự án và khóa học nhỏ.</span>
        </div>
        <div ref={ref} className={cx('list_tech')}>
            <div className={`${cx('wrapper_techList')} ${show ? 'transformLeft' : ''}`}>
                <h1>DOM WORLD</h1>
                <ul className={cx('list')}>
                {fontend.map((item,index) => (
                        <li key={index} className={cx('item')}>
                            <img alt={item.name} src={`${process.env.PUBLIC_URL}/icon/${item.src}`}/>
                            {item.name}
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className={`${cx('wrapper_techList')} ${show ? 'transformRight' : ''}`}>
                <h1>Databse/ Authentication</h1>
                <ul className={cx('list')}>
                {backend.map((item,index) => (
                        <li key={index} className={cx('item')}>
                            <img alt={item.name} src={`${process.env.PUBLIC_URL}/icon/${item.src}`}/>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${cx('wrapper_techList')} ${show ? 'transformBottom' : ''}`}>
                <h1>Libraries/ Frameworks</h1>
                <ul className={cx('list')}>
                    {libraries.map((item,index) => (
                        <li key={index} className={cx('item')}>
                            <img alt={item.name} src={`${process.env.PUBLIC_URL}/icon/${item.src}`}/>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Technologies