import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import LoginComponent  from './components/login-component/LoginContainer';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { Provider } from 'react-redux';
import { store } from './Store';

import RegistryComponent3 from './components/registry-component/RegistryComponent3';
import { history } from './utilities/history';

import DeletePost from './components/post-component/DeletePostComponent';
import MakePost from './components/post-component/MakePostComponent';
import PostList from './components/post-component/PostListComponent';
import LikePostComponent from './components/post-component/LikePostComponent'
import PostContainer from './components/post-component/PostContainer';

import PasswordResetComponent from './components/password-reset-component/PasswordResetComponent';


import FriendsListComponent from './components/friend-list-component/FriendsListComponent';
import UserProfile from './components/profile-component/UserProfileComponent';



const App: React.FC = () => {
  return (
    <div className="App">

      <Provider store={store}>
        <Router history = {history} >

          <div>
          <NavbarComponent />
     
          <Switch>

            <Route path='/login' component={LoginComponent} />

            <Route path='/registry' component={RegistryComponent3} />
            
            <Route path='/likePost' component={LikePostComponent} />
            <Route path='/makePost' component={MakePost} />
            <Route path='/deletePost' component={DeletePost} />
            <Route path='/postList' component={PostList} />
            <Route path='/postContainer' component={PostContainer} />
            <Route path='/friendsList' component={FriendsListComponent} />

            <Route path='/passwordReset' component={PasswordResetComponent} />

            <Route path='/userProfile' component={UserProfile} />




          </Switch>

          </div>

        </Router>
      </Provider>

    </div>
  );
}

export default App;