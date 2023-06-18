import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className=" d-flex p-5">
      <div className="m-5">
        <img src="/QA.jpeg" alt="" />
        <div className="text-center">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="m-5 btn btn-success">
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>
      <div className="container" ref={ref}>
        <div className="container">
          <h5 className="text-success">
            1. What is the differences between uncontrolled and controlled
            components?
          </h5>
          <p className="text-justify">
            Controlled components in React are those whose state and behavior
            are managed by the parent component. To modify their state and
            behavior, these components rely on props that are given down from
            the parent component. Components that control their own state on an
            internal level are referred to as uncontrolled components. They
            access the current value of the DOM element using a ref and modify
            the state as necessary.A component that receives its current value
            and update callback via props is said to be a controlled functional
            component.
          </p>
        </div>
        <div className="container">
          <h5 className="text-success">
            2. How to validate React props using PropTypes?
          </h5>
          <p className="text-justify">
            A method for verifying the data types of props sent to a React
            component is provided by the PropTypes module in React. Here is how
            you can use PropTypes to verify the properties of your component:
            <ul>
              <li>Import the PropTypes library.</li>
              <li>
                Set the propTypes property on your component's class to define
                the propTypes for your component.
              </li>
              <li>
                Now that the props have been validated by PropTypes, you can
                give them to your component.
              </li>
            </ul>
            An error message in your console explaining which prop was invalid
            and what type it was expecting will appear if any of the propTypes
            are broken. By using PropTypes, you can ensure that your components
            receive the right data types and that problems are caught early.
          </p>
        </div>
        <div className="container">
          <h5 className="text-success">
            3. What is the difference between nodejs and express js?
          </h5>
          <p className="text-justify">
            JavaScript code can be run outside of a browser using the open
            source, cross-platform Node.js runtime environment. You must keep in
            mind that NodeJS is not a programming language or a framework. The
            majority of folks are perplexed and realize it's a computer language
            or framework. For creating back-end services like APIs for web apps
            or mobile apps, we frequently use Node.js. Large corporations like
            Paypal, Uber, Netflix, Walmart, and others use it during production.
            <br />
            The Node.js web server's functionality is built upon the lightweight
            Express framework, which streamlines its APIs and adds useful new
            capabilities. With middleware and routing, it is simpler to organize
            the functionality of your application. It enhances HTTP objects in
            Node.js with useful functions. It makes rendering of dynamic HTTP
            objects easier.
          </p>
        </div>
        <div className="container">
          <h5 className="text-success">
            4. What is a custom hook, and why will you create a custom hook?
          </h5>
          <p className="text-justify">
            A JavaScript method called a "custom hook" enables you to separate
            and reuse code that can be used by numerous React components. Custom
            hooks are a means to package intricate state management and logic
            into reusable code that can be used declaratively and flexibly
            within React components.
            <br />
            <br />
            When you find yourself repeating the same logic across several
            components or when you want to divide the concerns of your
            application by turning a portion of functionality into a stand-alone
            unit, you should create a custom hook. Additionally, using custom
            hooks can make your code more testable, modular, and reusable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
