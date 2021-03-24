import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@material-ui/icons'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('A hiring binge in IT is coming', '1d ago - 896 readers')}
      {newsArticle('Tesla hits new highs', '2d ago - 400 readers')}
      {newsArticle('Bitcoin breaks $22k', '4d ago - 564 readers')}
      {newsArticle('Is Redux too good?', '6d ago - 254 readers')}
      {newsArticle("The world's happiest countries", '6d ago - 365 readers')}
    </div>
  )
}

export default Widgets
