import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*

-ReactDOM is a specific package in React that provides the glue between React and the Document Object Model (DOM) of a web page. It contains methods that allow React components to interact with and render into the actual HTML DOM.

-The ReactDOM.createRoot() method is used in concurrent mode to create a new root in the DOM that enables asynchronous rendering. It returns a Root object that you can use to initiate rendering asynchronously with the render() method.

-The ReactDOM.render() method is used to render a React element or component into the specified DOM element. It takes two arguments: the React element or component to render and the DOM element where it should be rendered.
 e.g.ReactDOM.render(<App />, document.getElementById('root'));

*/