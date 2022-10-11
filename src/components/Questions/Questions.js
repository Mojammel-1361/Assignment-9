import React from 'react';

const Questions = () => {
    return (
        <div>
            <div className='p-8'>
                <h1 className='text-3xl m-4'>1. purpose of react router</h1>
                <p className='indent-10 break-all'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
            </div>
            <div className='p-8'>
                <h1 className='text-3xl m-4'>2. What is it and How it works?</h1>
                <p className='indent-10 break-all'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
            </div>
            <div className='p-8'>
                <h1 className='text-3xl m-4'>3. React useRef Hook</h1>
                <p className='indent-10 break-all'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. There are situations where you might want to persist certain values in consecutive renders. Instead of storing these values in state which might cause unnecessary renders, you can store it as the value of useRef's current property since react guarantees that this value is persisted between re-renders. Furthermore, if you want to determine state value from previous state values, it is advisable to use useRef hook to persist them. This is very helpful because in functional components, state is not merged but completely replaced.</p>
            </div>
        </div>
    );
};

export default Questions;