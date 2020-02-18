import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirstComponent } from './components/first-component/FirstComponent'
import { SecondComponent } from './components/second-component/SecondComponent';
import ClickerComponent  from './components/clicker-component/ClickerContainer';
import { PropComponent } from './components/prop-component/PropComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifecycleComponent } from './components/lifecycle-component/LifecycleComponent';
import ChuckNorrisComponent  from './components/chuck-norris-component/ChuckNorrisContainer';
import LoginComponent  from './components/login-component/LoginContainer';
import PokemonComponent  from './components/pokemon-component/PokemonContainer';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import StarWarsComponent  from './components/star-wars-component/StarWarsContainer';
import T3Component  from './components/tic-tac-toe-component/T3Container';
import RegistryComponent3 from './components/registry-component/RegistryComponent3';
import PostComponent from './components/post-component/PostListComponent';
import LoginComponent2  from './components/login-component/LoginComponent2';

import DeletePost from './components/post-component/DeletePostComponent';
import MakePost from './components/post-component/MakePostComponent';
import PostList from './components/post-component/PostListComponent';


const App: React.FC = () => {
//const App: React.FC<any> = (props:any) => {
  return (
    <div className="App">
      <Provider store={store}>

        <Router>
          <NavbarComponent />
     
          <Switch>
            <Route path='/tic-tac-toe' component={T3Component}/>

            <Route path='/starwars' component={StarWarsComponent}/>
            <Route path='/pokemon' component={PokemonComponent}/>
            <Route path='/login' component={LoginComponent} />
            <Route path='/chucknorris' component={ChuckNorrisComponent} />
            <Route path='/lifecycle' component={LifecycleComponent} />
            <Route path='/second' component={SecondComponent} />

            <Route path='/clicker' component={ClickerComponent} />
            <Route path='/registry' component={RegistryComponent3} />
            <Route path='/post' component={PostComponent} />
            <Route path='/login2' component={LoginComponent2} />


            <Route path='/props' render={() => <PropComponent name={'Alec'} color={'grey'} />} />
            <Route path='/' component={FirstComponent} />
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;