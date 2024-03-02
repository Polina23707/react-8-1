interface ListItemType {
  id: number,
  name: string,
  onClick: any,
}

export default function ListItem({id, name, onClick}: ListItemType) {
  return(
    <li className='user-item'>
      <button className='user-item-btn'id={id.toString()} onClick={onClick}>{name}</button>
    </li>
  )
}