import './App.css'
import { useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import Details from './components/Details'

interface IItem {
  id: number,
  name: string,
}

function App() {

  const [list, setList] = useState<IItem[]>([]);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const list = await response.json();
        setList(list);
      } catch (e) {
        console.error(e);
      }
    }
    fetchList();
  }, []);

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setId(event.target.id);
  }

  return (
    <div className='container'>
      <ul className='user-list'>
        {list.map((item) => <ListItem key={item.id} id={item.id} name={item.name} onClick={(event) => onClick(event)}/>)}
      </ul>
      {id !== 0 && <Details id={id}/>}
    </div>
  )
}

export default App


