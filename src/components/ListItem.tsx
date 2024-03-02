interface IListItem {
  id: number,
  name: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function ListItem({id, name, onClick}: IListItem) {
  return(
    <li className='user-item'>
      <button className='user-item-btn'id={String(id)} onClick={(event) => onClick(event)}>{name}</button>
    </li>
  )
}