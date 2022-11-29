import React from 'react';

const Blog = () => {
    return (
        <div className='mt-24 mb-24 pl-10 pr-10'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-accent text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-4xl">
                    --What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-accent text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl">
                    --What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p> URLs can be used to store data, for example. The id of the currently viewed item • Filter parameters • Pagination offset and limit • Sorting data
                        <br /> Web storage to save the state in the browser. This comes in handy when we want to keep the state between reloads and reboots. Cookies, local storage, and IndexedDB are a few examples. These are browser technologies that are native to the browser.

                        <br /> The local store state. It's useful when only one component requires the state.
                        <br /> It contributes to ensuring that all of our components consistently reflect the same state. We declare the state in a common parent component first, and then pass it down to child components using props. This pattern should be considered when several related components must use the same thing.

                        5. Derived State- The fifth option is to compute the new state based on the existing state, which eliminates the need to declare a state at all. If there are existing values that can be combined to provide the information we require, we can calculate it on each render rather than storing it.</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-accent text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    --How does prototypical inheritance work?

                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-accent text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl">
                    --Difference among React vs. Angular vs. Vue?..
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.
                        <br /> Angular is Google's matured and advanced JavaScript framework based on TypeScript, <br /> whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;