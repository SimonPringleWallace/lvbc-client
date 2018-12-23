import React from 'react'

export const PostPreview = ({title, excerpt}) => {
  console.log('postPreview')
  return(
    <div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  )
}
