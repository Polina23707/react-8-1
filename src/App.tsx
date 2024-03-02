import './App.css'
import { useEffect, useRef, useState } from 'react'
import ListItem from './components/ListItem'
import Details from './components/Details'

interface itemType {
  id: number,
  name: string,
}

function App() {

  const [reload, setRelaod] = useState(false);
  const [list, setList] = useState<itemType[]>([]);
  const [id, setId] = useState<number>(0);
  
  const timestampRef: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    const fetchList = async () => {
      const datestamp = Date.now();
      timestampRef.current = datestamp;
      try {
        const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const list = await response.json();
        if (timestampRef.current === datestamp) {
          setList(list);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchList();
  }, [reload]);

  function onClick(e: any) {
    e.preventDefault();
    setId(e.target.id);
  }

  function showDetails() {
    if (id !== 0) {
      return <Details id={id}/> 
    }
  }

  return (
    <div className='container'>
      <ul className='user-list'>
        {list.map((item) => <ListItem key={item.id} id={item.id} name={item.name} onClick={onClick}/>)}
      </ul>
      {showDetails()}
    </div>
  )
}

export default App


