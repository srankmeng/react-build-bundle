import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
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
  const [user, setUser] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get('https://gorest.co.in/public/v1/users');
      setUser(data.data[0]);
    };
    init();
  }, []);

  return (
    <div>
      <header style={style.header}>
        <p>
          name: {user.name}
        </p>
        <a
           style={style.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
