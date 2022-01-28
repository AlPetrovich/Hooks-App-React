import React from 'react';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {
  return(
      <div className='notes__main-content'>
          <NotesAppBar />

          <div className='notes__content'>
              <input 
                type="text"
                placeholder="Some awesome title"
                className="notes__title-input"
                autoComplete='off'
              />

              <textarea
                placeholder='What happened today'
                className='notes__textarea'
              ></textarea>

              <div className='notes__image'>
                  <img  
                    src='https://cdn.pixabay.com/photo/2020/06/09/15/36/landscape-5278857_960_720.jpg'
                    alt="imagen"
                  />
              </div>
          </div>
      </div>
  )
};
