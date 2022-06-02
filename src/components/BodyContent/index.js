import styles from './BodyContent.module.scss';
import className from 'classnames/bind';
import React from 'react'
import Welcome from './Welcome';
import Technologies from './Technologies';
import Projects from './Projects';
import Contact from './Contact';

const cx = className.bind(styles)

export default function BodyContent() {
  const root = document.getElementById('root');
  const [scrollView,setScrollView] = React.useState(0)


    root.onscroll = () => {
      const value = root.scrollTop + root.clientHeight
      setScrollView(value)
    }

  return (
    <div className={cx('wrapper')}>
        <Welcome/>
        <Technologies scrollView={scrollView} />
        <Projects scrollView={scrollView} />
        <Contact scrollView={scrollView} />
    </div>
  )
}
