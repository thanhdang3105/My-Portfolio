import React from 'react'
import './App.scss';
import CreatorInfo from './components/CreatorInfo';
import Header from './components/patials/Header';
import BodyContent from './components/BodyContent';
import Footer from './components/patials/Footer';

export default function App() {
  const [isStart,setIsStart] = React.useState(false)

  
  return (
    <div className='App'>
      <CreatorInfo setState={setIsStart} />
        {isStart && (
        <div className="content">
          <Header />
          <BodyContent/>
          <Footer/>
        </div>
        )}
    </div>
  );
}