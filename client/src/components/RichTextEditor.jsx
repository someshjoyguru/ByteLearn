import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyComponent=({input,setInput})=> {

  const handleChange=(content)=>{
    setInput({...input,description:content});
  }

  return <ReactQuill theme="snow" value={input.description} onChange={handleChange}  />;
}

export default MyComponent;