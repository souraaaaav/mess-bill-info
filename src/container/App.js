import React, { useEffect, useState } from 'react';
import Alif from '../components/Alif';
import Arman from '../components/Arman';
import CR3WLogo from '../components/CR3WLogo/CR3WLogo';
import Footer from '../components/Footer/Footer';
import Piash from '../components/Piash';
import Siam from '../components/Siam';
import Sourav from '../components/Sourav';
import Sunan from '../components/Sunan';
import Tahmid from '../components/Tahmid';
import './App.css';
function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    console.log(isLoading, 'before')
    setTimeout(() => setIsLoading(false), [3000])
    console.log(isLoading, 'after')

  }, [isLoading])
  return (
    <>

      <div className="App">
        {
          isLoading ? <CR3WLogo /> :
            <div className="App">
              <Tahmid />
              <Alif />
              <Sourav />
              <Arman />
              <Piash />
              <Siam />
              <Sunan />
              <Footer />
            </div>
        }
      </div>

    </>
  );
}

export default App;
