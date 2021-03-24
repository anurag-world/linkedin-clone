import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice'
import './HeaderOption.css'

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectuser)
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
