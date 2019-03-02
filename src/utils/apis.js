import React from 'react';

export const getPosts = () => {
  fetch('https://www.lvobc.org/wp-json/wp/v2/posts/?_embed')
  .then(res => res.json())
  .then(res => this.setState({response: res}))
  .then(res => console.log(res))
  // .then(res => this.setState({titles: res.map(post => post.title.rendered),
    //                             excerpts:res.map(post => post.excerpt.rendered),
    //                             contents: res.map(post => post.content.rendered)
    //                           })
    //                         )
}
