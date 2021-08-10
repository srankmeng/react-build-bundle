import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const style = {
  header: {
    textAlign: 'center',
    background: '#282c34',
    color: '#fff',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
  },
  link: {
    color: '#61dafb',
  }
}

function App() {
  
  const [user, setUser] = useState([]);
  const [mode, setMode] = useState('');

  const generate = (mode) => {
    switch(mode) {
      case 'cookie': {
        return (
          <p>
            cookie - name: {user.name}
          </p>
        )
      }
      case 'privacy': {
        return (
          <p>
            privacy - name: {user.name}
          </p>
        )
      }
      default:
        return <p>default</p>;
    }
  }

  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get('https://gorest.co.in/public/v1/users');
      setUser(data.data[0]);

      const scriptTag = document.querySelector('script[data-name="ccmp"]');
      const mode = scriptTag ? scriptTag.getAttribute('data-mode') : 'none'; // get from attribute
      setMode(mode);
      console.log('mode:', mode);
    };
    init();
  }, []);

  return (
    <div>
      <header style={style.header}>
        {
          generate(mode)
        }
      </header>
    </div>
  );
}

export default App;
