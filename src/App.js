import './App.css';

import Terminal from './components/Terminal';
import BlinkingText from './Blinking_Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Terminal>
        <div className='prompt'><span className=''>visitor@burntice.xyz</span>:<span className='comment'>/home</span>$ <span className='command'>portfolio</span></div>
        
        <div className='title'>    ____                   __  ____        </div>
        <div className='title'>   / __ )__  ___________  / /_/  _/_______ </div>
        <div className='title'>  / __  / / / / ___/ __ \/ __// // ___/ _ \</div>
        <div className='title'> / /_/ / /_/ / /  / / / / /__/ // /__/  __/</div>
        <div className='title'>/_____/\__,_/_/  /_/ /_/\__/___/\___/\___/ </div>
        <div className='title'>Clayton Midgley</div>
                                           

          <p>WPI <a className='link' href='/RBE'>RBE</a>/<a className='link' href='/CS'>CS</a> Undergrad Class of 2026</p>
          <p>President of the WPI <a className='link' href='https://collablab.wpi.edu/'>CollabLab</a></p>
          <p>3D Printing Enthusiast</p>
          <p>Builder of things</p>

          <p>Find me on:</p>
          <ul id='links'>
            <li>
              <a className='link' href='https://www.linkedin.com/in/clayton-midgley-709692269/'>LinkedIn</a>
            </li>
            <li>
              <a className='link' href='https://github.com/BurntIce16' >GitHub</a></li>
            <li>
              <a className='link' href='https://www.instagram.com/burnt._.ice/'>Instagram</a>
            </li>
            <li>
              <a className='link' href='https://www.printables.com/@Bicey_570009'>Printables</a>
              </li>
          </ul>

          <div > </div>

          <div className='prompt'><span className=''>visitor@burntice.xyz</span>:<span className='comment'>/home</span>$<span className='command'><BlinkingText text='|'>|</BlinkingText></span></div>

        </Terminal>
        
      </header>
    </div>
  );
}

export default App;


//Sources used:
//https://patorjk.com/software/taag/#p=display&f=Slant&t=BurntIce