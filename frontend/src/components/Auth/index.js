import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles.css'
import { selectAuth } from './selectors'

export const Auth = () => {
   const auth = useSelector(selectAuth)

   useEffect(() => {
      console.log("auth", auth)
   }, [auth])

   return (
      <h1 className="title">AUTH</h1>
   )
}
