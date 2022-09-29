import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>Blog</h1>
            <div className='q1'>
                <h3>Question 1: How Does React Work</h3>
                <h4>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</h4>
            </div>
            <div className='q2'> 
                <h3>Question 2: Difference between state and props react</h3>
                <h4>   The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</h4>
            </div>
            <div className='q3'> 
                <h3>Question 3: Useeffect uses without data load.</h3>
                <h4> The useEffect Hook Usages. The callback function we pass to the useEffect hook runs the side effects. React runs it on every render of a component by default..</h4>
            </div>
        </div>
    );
};

export default Blog;