import './App.css';

import Terminal from './components/Terminal';
import BlinkingText from './components/Blinking_Text';

function ErrorPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Terminal>
                    <div className='prompt'><span className=''>visitor@burntice.xyz</span>:<span className='comment'>/error</span>$ <span className='command'>404</span></div>

                    <div className='title'>   _ __  ____  __ __</div>
                    <div className='title'>  / // / / __ \/ // /</div>
                    <div className='title'> / // /_/ / / / // /_</div>
                    <div className='title'>/__  __/ /_/ /__  __/</div>
                    <div className='title'>  /_/  \____/  /_/   </div>
                    <div className='title'>oops, that wasn't supposed to happen...</div>

                    <div > </div>

                    <div className='prompt'><span className=''>visitor@burntice.xyz</span>:<span className='comment'>/error</span>$<span className='command'><BlinkingText text='|'>|</BlinkingText></span></div>

                </Terminal>

            </header>
        </div>
    );
}

export default ErrorPage;


//Sources used:
//https://patorjk.com/software/taag/#p=display&f=Slant&t=BurntIce
//https://realfavicongenerator.net/