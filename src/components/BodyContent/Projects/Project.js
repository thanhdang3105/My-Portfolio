import React from 'react'
import styles from './Projects.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

const noImage = process.env.PUBLIC_URL + '/img/no-image.png'
const initUrl = {
    src: '',
    demo:''
}

export default function Project({ img = noImage, name = 'Project name', desc = 'Project desc', techs = ['tech'], url = initUrl, eventSwipe = () => {} }) {
    const [fallBack,setFallBack] = React.useState()
    const [pageX,setPageX] = React.useState(0)

    const ulRef = React.useRef()

    const handleSwipe = (e) => {
        const list = ulRef.current
        if(list.scrollWidth !== list.clientWidth) {
            e.stopPropagation()
        }
        eventSwipe(e,list,pageX,setPageX)
    }

  return (
    <li className={cx('project_item')}>
        <div className={cx('item_imageBox')}>
            <img className={cx('item_image')} alt={name} src={fallBack || img || noImage} onError={() => setFallBack(noImage)}/>
        </div>
        <h1 className={cx('project_name')}>{name}</h1>
        <p className={cx('project_description')}>{desc}</p>
        <ul ref={ulRef} className={cx('project_techList',`${techs.length <= 4 && 'justifyCenter'}`)} onMouseDown={handleSwipe}>
            {techs.map((tech,index) => (
                <li key={index} className={cx('project_tech')}>
                    {tech}
                </li>
            ))}
        </ul>
        <div className={cx('project_links')}>
            <a className={cx('link')} href={url.src} target='_blank' rel="noreferrer">Thư mục</a>
            <a className={cx('link')} href={url.demo} target='_blank' rel="noreferrer">Demo</a>
        </div>
    </li>
  )
}
