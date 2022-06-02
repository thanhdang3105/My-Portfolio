import React from 'react'
import styles from '../BodyContent.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles)

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
        <span className={cx('tech_desc')}>Đây là một số công nghệ mà tôi đã học được <br/>cho đến nay thông qua một số dự án và khóa học nhỏ.</span>
        <div ref={ref} className={cx('list_tech')}>
            <div className={`${cx('wrapper_techList')} ${show ? 'transformLeft' : ''}`}>
                <h1>DOM WORLD</h1>
                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <img alt='icon_html' src={`${process.env.PUBLIC_URL}/icon/html.svg`}/>
                        Html
                    </li>
                    <li className={cx('item')}>
                        <img alt='icon_css' src={`${process.env.PUBLIC_URL}/icon/css.svg`}/>
                        Css
                    </li>
                    <li className={cx('item')}>
                        <img alt='icon_js' src={`${process.env.PUBLIC_URL}/icon/javascript.svg`}/>
                        JavaScript
                    </li>
                    <li className={cx('item')}>
                        <img alt='icon_sass' src={`${process.env.PUBLIC_URL}/icon/sass.svg`}/>
                        Sass
                    </li>
                </ul>
            </div>
            <div className={`${cx('wrapper_techList')} ${show ? 'transformRight' : ''}`}>
                <h1>Libraries/ Frameworks</h1>
                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <img alt='icon_react' src={`${process.env.PUBLIC_URL}/icon/reactJs.svg`}/>
                        React JS
                    </li>
                    <li className={cx('item')}>
                        <img alt='icon_redux' src={`${process.env.PUBLIC_URL}/icon/redux.svg`}/>
                        Redux
                    </li>
                    <li className={cx('item')}>
                        <img alt='icon_antd' src={`${process.env.PUBLIC_URL}/icon/antd.png`}/>
                        Ant Design
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Technologies