import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationButton from '../AuthorizationButton'

export const App = () => {
   return (
      <>
         <Switch>
            <Route path="/login">
               <AuthorizationButton
                  textButton="Войти"
                  messageClickButton="Как-то так!"
               />
            </Route>

            <Redirect to="/login" />
         </Switch>
      </>
   )
}
