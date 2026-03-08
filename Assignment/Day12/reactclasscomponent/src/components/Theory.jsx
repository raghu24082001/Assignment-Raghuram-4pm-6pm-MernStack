import { Component } from "react";

class Theory extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div>
          <h3>1. What is a Class Component in React?</h3>
          <p>
            A Class Component is a React component written using ES6 class
            syntax. Before the introduction of React Hooks, class components
            were the main way to manage state and lifecycle logic in React
            applications.
          </p>
          <p>
            Class components give access to important features like
            <b> state, setState(), and lifecycle methods</b>.
          </p>

          <ol>
            <li>Constructor</li>
            <li>Render Method</li>
            <li>Lifecycle Methods</li>
          </ol>
        </div>

        <div>
          <h3>2. How to Create a Class Component</h3>

          <ol>
            <li>Import React and Component</li>
            <li>Create a class</li>
            <li>Extend Component</li>
            <li>Add <code>render()</code> method</li>
            <li>Return JSX</li>
          </ol>
        </div>

        <div>
          <h3>3. What is State?</h3>

          <p>
            State is an object that stores dynamic data inside a component.
            State allows the React component to update the UI automatically
            whenever the data changes.
          </p>
        </div>

        <div>
          <h3>4. setState() Process</h3>

          <p>
            <code>setState()</code> is used to update the state of a component.
            When setState() is called, React updates the state and re-renders
            the component.
          </p>

          <ol>
            <li>User action happens (button click)</li>
            <li>setState() is called</li>
            <li>State is updated</li>
            <li>Component re-renders</li>
            <li>UI updates automatically</li>
          </ol>
        </div>

        <div>
          <h3>5. Lifecycle Methods</h3>

          <p>React class components have three main lifecycle phases:</p>

          <h4>Mounting</h4>
          <p>The component is created and inserted into the DOM.</p>
          <ul>
            <li>constructor()</li>
            <li>render()</li>
            <li>componentDidMount()</li>
          </ul>

          <h4>Updating</h4>
          <p>Occurs when state or props change.</p>
          <ul>
            <li>shouldComponentUpdate()</li>
            <li>componentDidUpdate()</li>
          </ul>

          <h4>Unmounting</h4>
          <p>The component is removed from the DOM.</p>
          <ul>
            <li>componentWillUnmount()</li>
          </ul>
        </div>

        <div>
          <h3>6. Real Example with Button</h3>

          <p>
            A common example is a counter. When the button is clicked, the count
            increases using setState().
          </p>

          <pre>
{`class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
      </>
    );
  }
}`}
          </pre>
        </div>

        <div>
          <h3>7. What happens without button / without setState</h3>

          <p>
            If there is no button or user interaction, the state will never
            change. The component will display the same value.
          </p>

          <p>
            If we update the state without using <code>setState()</code>, React
            will not re-render the component and the UI will not update.
          </p>
        </div>

        <div>
          <h3>8. What is constructor() in React Class Component?</h3>

          <p>
            The constructor is a special method used to initialize the component
            when it is created.
          </p>

          <p>It runs before the component is mounted.</p>
        </div>

        <div>
          <h3>9. Why We Use constructor()?</h3>

          <ol>
            <li>Initialize state</li>
            <li>Bind event methods</li>
          </ol>

          <pre>
{`constructor(){
  super();
  this.state = {
    count: 0
  }
}`}
          </pre>
        </div>
      </>
    );
  }
}

export default Theory;