interface IListItem {
  id: number,
  name: string,
  onClick: (e: any) => void,
}

export default function ListItem({id, name, onClick}: IListItem) {
  return(
    <li className='user-item'>
      <button className='user-item-btn'id={String(id)} onClick={onClick}>{name}</button>
    </li>
  )
}