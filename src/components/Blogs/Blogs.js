import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10 '>
            <div className='border shadow-lg text-xl  p-4'>
                <h1 className='text-2xl font-bold pb-2'>What is Context API?</h1>
                <p>Ans: Context API is a React feature that allows  to share state across the entire application. It actually creates a global variable that can be passes to any components. Context API returns a consumer and a provider. When we need to share a state in multiple components, we have to use context API. We can pass the data through props.</p>

            </div>
            <div className='border shadow-lg text-xl  p-4'>
                <h1 className='text-2xl font-bold pb-2'>Semantic tags?</h1>
                <p>
                    Ans:   Semantic tags are HTML tags that provides meaning to the webpage. Semantic tags are the medium of communication between a webpage and browser. It helps browser to understand what the webpage is all about. For example: h1 tag is a semantic tag because it means a header. Other examples are blockquote, p, span, strong tags etc.
                </p>
            </div>
        </div>
    );
};

export default Blogs;