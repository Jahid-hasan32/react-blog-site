import React from 'react'
import ListOfArticle from '../components/Writers/ListOfArticle'

const Writers = () => {


  return (
    <div>
      <h1>hello this is checking...</h1>
        {/* diverting to list of article page to show all articles related to this writer. */}
        <ListOfArticle/>
    </div>
  )
}

export default Writers