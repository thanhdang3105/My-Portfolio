import React from 'react'
import styles from './Projects.module.scss'
import className from 'classnames/bind'
import Project from './Project'

const cx = className.bind(styles)

const listProjects = [
  {
    img: `${process.env.PUBLIC_URL}/img/Todo_Redux.png`, 
    name: 'Todo', 
    desc: 'Ứng dụng ghi chú các việc cần làm.', 
    techs: ['Sass','Html','antd','Javascript','React','Redux'], 
    url: {
      src: 'https://github.com/thanhdang3105/VD_Redux',
      demo: 'https://thanhdang3105.github.io/VD_Redux/'
    }
  },
  {
    img: `${process.env.PUBLIC_URL}/img/Chat_App.png`, 
    name: 'Messenger', 
    desc: 'Ứng dụng chat nhóm.', 
    techs: ['Sass','Html','antd','Javascript','React','Firebase'], 
    url: {
      src: 'https://github.com/thanhdang3105/MessageFake',
      demo: 'https://thanhdang3105.github.io/MessageFake'
    }
  }
]

function Projects({ scrollView }) {

  const [pageX,setPageX] = React.useState(0)
  const [show,setShow] = React.useState(false)


  const listRef = React.useRef()

  React.useEffect(() => {
    const project = listRef.current
    if(scrollView >= project.offsetTop + 20 && scrollView <= project.offsetTop + project.clientHeight){
      setShow(true)
    }
    else if(scrollView <= project.offsetTop + 50){
      setShow(false)
    }
  }, [scrollView])
  

  function swipeList(e,list,pageX,setPageX) {
    let page = e.pageX
    let pageMove = 0
    document.onmousemove = (e) =>{
      pageMove = pageX - (e.pageX - page)
      list.scroll({
        left:  pageMove,
      });
    }
    document.onmouseup = () =>{
      if(list.scrollLeft >= list.scrollWidth - list.clientWidth){
        setPageX(list.scrollWidth - list.clientWidth)
      }
      else if(list.scrollLeft <= 0) {
        setPageX(0)
      }
      else{
        setPageX(pageMove)
      }
      document.onmousemove = () =>{}
    }
  }

  return (
    <div id='projects' className={cx('project_wrapper')}>
      <h1 className={cx('project_heading')}>Sản phẩm</h1>
      <ul ref={listRef} className={`${cx('project_list')} ${show ? 'transformBottom' : ''}`} style={listProjects.length <= 4 ? {justifyContent: 'center',overflowX: 'hidden'} : {}} onMouseDown={(e) => swipeList(e,listRef.current,pageX,setPageX)}>
        {listProjects.map((project,index) => (
          <Project key={index} {...project} eventSwipe={swipeList}/>
        ))}
      </ul>
    </div>
  )
}

export default Projects
