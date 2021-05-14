import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from '../Auth'

export const App = () => {
   return (
      <>
         <Switch>
            <Route path="/auth">
               <Auth />
            </Route>

            <Redirect to="/auth" />
         </Switch>
      </>
   )
}
