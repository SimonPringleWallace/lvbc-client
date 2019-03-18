import React from 'react';
import NavBar from './../shared/nav';
import { HomePageAbout } from './homepageInfo';
import {PostPreview} from './posts';
import './homepageInfo';
import './homepage.css';
import { CounterBlock } from '../shared';
import { Footer } from '../shared';

class Homepage extends React.Component {
  constructor() {
    super()
      this.state = {
        response: [],
        titles: [],
        excerpts: [],
        contents:[]
    }
  }

  componentDidMount() {
      window.scrollTo(0,0);
  }

// generate posts based off of the data recieved in componentDidMount
  postGenerator = () => {
    return (
      this.state.response.map(post =>
        <PostPreview
        title = {post.title.rendered}
        excerpt = {post.excerpt.rendered}
        />
    )
  );
 }

   render () {
     return(
       <React.Fragment>
         <NavBar />
         <div className='hero-image'>
         <h3>Literacy Volunteers</h3>
         <h5>of Berkshire County</h5>
         </div>
         <div className='reading'>
         <CounterBlock/>
         <HomePageAbout />
         </div>
         <Footer />
         {this.postGenerator()}
       </React.Fragment>
     );
   };
}

export default Homepage
