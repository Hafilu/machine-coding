import React, { useState } from 'react'
import Notes from './Notes'

const DragNotes = () => {
    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes") || []))
    const [item,setItem] = useState("")
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} item={item} setItem={setItem}/>
    </div>
  )
}

export default DragNotes
