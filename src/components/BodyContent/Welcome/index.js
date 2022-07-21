import React from 'react'
import styles from '../BodyContent.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles)

export default function Welcome() {
  return (
    <div id="Welcome" className={cx('welcome_wrapper')}>
        <div className={cx('content')}>
            <h1 className={cx('welcome_title')}>Chào mừng đến với Portfolio của tôi</h1>
            <p className={cx('welcome_desc')}>Xin chào! Tôi tên Thanh. Cảm ơn bạn đã ghé qua Portfolio của tôi. Mời bạn xem xét xung quanh và hy vọng bạn có thể cho tôi một số phản hồi. Cảm ơn bạn rất nhiều!</p>
            <a className={cx('btn_downCV')} href="https://www.topcv.vn/download-cv?cv_id=DgcGA1YHUlBaAlMGBABWUwwFAFJWUAUEA1ACBg45c2&dontcount=1">Tải CV</a>
        </div>
    </div>
  )
}
