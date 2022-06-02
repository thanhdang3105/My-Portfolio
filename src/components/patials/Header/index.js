import styles from './Header.module.scss';
import className from 'classnames/bind';
import React from 'react'
import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';

const cx = className.bind(styles)

export default function Header() {

    function scrollSmoth(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href') || e.target.parentElement.getAttribute('href')
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        })
    }

  return (
    <div className={cx('wrapper')}>
        <header className={cx('header_wrapper')}>
            <a href='#Welcome' className={cx('header_logo')} onClick={scrollSmoth}>
                <img alt="logo" className={cx('logo')} src={`${process.env.PUBLIC_URL}/img/Logo.png`}/>
            </a>
            <ul className={cx('navigation-list')}>
                <li className={cx('navigation-item')}>
                    <a href='#technologies' className={cx('navigation-link')} onClick={scrollSmoth}>Kỹ năng</a>
                </li>
                <li className={cx('navigation-item')}>
                    <a href='#projects' className={cx('navigation-link')} onClick={scrollSmoth}>Sản phẩm</a>
                </li>
                <li className={cx('navigation-item')}>
                    <a href='#contact' className={cx('navigation-link')} onClick={scrollSmoth}>Liên hệ</a>
                </li>
            </ul>
            <div className={cx('social_list')}>
                <a href='https://www.facebook.com/danghuuthanh20' rel='noreferrer' target='_blank' ><FacebookOutlined /></a>
                <a href='https://github.com/thanhdang3105' rel='noreferrer' target='_blank'><GithubOutlined /></a>
            </div>
    </header>
    </div>
  )
}
