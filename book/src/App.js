import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import IndexPage from './pages/index';
import ShowPage from './pages/show';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPage from './pages/new';
import DB from './db';
class App extends Component {
  
  state= {
    db: new DB(''),
    pages: {},
    loading : true
  }

async componentDidMount(){
  const pages = await this.state.db.getAllPages();
  
  this.setState({
    pages,
    loading: false
  });
}

  handleSave = async (page) => {
    let {id}= await this.state.db.createPage(page);
    const {pages} = this.state;
    this.setState({
      pages: {
          ...pages,
          [id]: page
      }
    });
    return id;
      }
  
    renderContent(){
      if (this.state.loading){
        return <h2>Chargement en cours...</h2>
      }
      return (
      <div className='app-content'>
    <Route exact path="/" component={(props) => <IndexPage {...props} pages={this.state.pages}/>}/>
    <Route exact path="/pages/:id" component={(props) => <ShowPage {...props} page={this.state.pages[props.match.params.id]} /> } />
    <Route exact path="/new" component={(props) => <NewPage {...props} onSave={this.handleSave} />} />
    </div>);
      }
  render(){

    return (

      <BrowserRouter>
      
    <div className="App">
      <Navbar/>
      {this.renderContent()}
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
