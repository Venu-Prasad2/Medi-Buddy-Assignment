import './App.css'
import {Component} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Services from "./components/Services";
import Banner from "./components/Banner";
import Features from './components/Features';
import Rating from './components/Rating';
import Question from './components/Question';
import Packages from './components/Packages';
import Subscribers from './components/Subscribers';
import Lab from "./components/Lab"
import "@fontsource/lexend-deca";

class App extends Component
{
  state={resObject:[]};
  componentDidMount()
    {
        const fetchDetails =  async ()=>
        {
            const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
            const data = await response.json();
            console.log(data);
            this.setState({resObject:data[0].page_config});
        }
        fetchDetails();
    }
  render()
  {
    
      return (this.state.resObject.length!==0)&&(
      <div className='main-container'>
        <Header/>
        <Search/>
        <Services serviceObject={this.state.resObject[0]}/>
        <Banner bannerObject={this.state.resObject[1]}/>
        <Features featuresObject={this.state.resObject[2]}/>
        <Subscribers/>
        
        <Rating ratingsObject={this.state.resObject[5]}/>
        <Packages packageObject={this.state.resObject[3]}/>
        <Lab/>
        <Question questionObject={this.state.resObject[6]}/>
      </div>
     
  )
  
  }
}
export default App;