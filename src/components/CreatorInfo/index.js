import { CaretDownOutlined } from '@ant-design/icons'
import React from 'react'
import styles from './CreatorInfo.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

export default function CreatorInfo({setState}) {
    const imgRef = React.useRef()

    const handleRemoveClassHidden = () => {
      const image = imgRef.current
      const hiddenClass = cx('hidden')
      image.classList.remove(hiddenClass)
        image.parentElement.classList.add('begin')
        setTimeout(() => {
            setState(false)
        }, 500)
    }

    const handleAddClassHidden = () => {
      const image = imgRef.current
      const hiddenClass = cx('hidden')
      setState(true)
      image.classList.add(hiddenClass)
      image.parentElement.classList.remove('begin')
    }

  document.onwheel = (e) => {
    const {deltaY} = e
    const image = imgRef.current
    const hiddenClass = cx('hidden')
    const root = document.getElementById('root')

    image.classList.contains(hiddenClass) && setState(true)
    
    if(deltaY < 0 && root.scrollTop <= 0 && image.classList.contains(hiddenClass)) {
      handleRemoveClassHidden()
    }
    else if(deltaY > 0 && !image.classList.contains(hiddenClass)){
      handleAddClassHidden()
    }
  }
  return (
    <div className={cx('creator_info')} ref={imgRef}>
        <div className={cx('avatar_box')}>
                <img className={cx('avatar')} alt='avatar' src={`${process.env.PUBLIC_URL}/img/anh.png`}/>
        </div>
        <div className={cx('info')}>
          <h2 className={cx('info_name')}>Đặng Hữu Thanh</h2>
          <span className={cx('info_birthday')}>31/05/2000</span>
        </div>
        <div className={cx('review_experience')}>
          <p>Hiện đang là sinh viên năm 3 tại trường đại học Mở Hà Nội.</p>
          <p>Mục tiêu trở thành 1 Fullstack Developer.</p>
        </div>
        <div className={cx("guide_control")} onClick={handleAddClassHidden}>
          <span>Scroll down or Click here</span>
          <CaretDownOutlined />
        </div>
      </div>
  )
}
