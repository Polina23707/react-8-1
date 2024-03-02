import { useState, useEffect, useRef } from "react";

interface IUser {
  name: string,
  id: number,
  avatar: string,
  details: {
    city: string,
    position: string,
    company: string,
  }
}

export default function Details({id}: any) {

  const [user, setUser] = useState<IUser>({
    name: '',
    id: 0,
    avatar: '',
    details: {
      city: '',
      position: '',
      company: '',
    }
  });
  const [loading, setLoading] = useState(false);

  const timestampRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    const fetchUser = async () => {
      const datestamp = Date.now();
      timestampRef.current = datestamp;
      setLoading(true);
      try {
        const response = await fetch(` https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const user = await response.json();
        if (timestampRef.current === datestamp) {
          setUser(user);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  function showUser() {
    if (loading === false) {
      return(
        <div className='details-container'>
          <img className='details-img' src={user.avatar}></img>
          <div className='details-name'>{user.name}</div>
          <div className='details-city'>City: {user.details.city}</div>
          <div className='details-company'>Company: {user.details.company}</div>
          <div className='details-position'>Position: {user.details.position}</div>
        </div>
      )
    }
  }

  return(
    <>
    {showUser()}
    </>
  ) 
}