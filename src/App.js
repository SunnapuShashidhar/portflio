import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Fotter from './Components/fotter';
import Contact from './Components/Contact';
import WriteaRcomponent from './Components/WriteaRcomponent';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProjectPage from './Components/ProjectPage';
import NotFound from './Components/NotFound';
import HomePage from './Components/HomePage';
import BolgPage from './Components/BolgPage';
import ProjectAdd from './Components/ProjectAdd';
import { Provider } from './context';
import AllProject from './Components/AllProject';
import AllBlogs from './Components/AllBlogs';
import AddBlog from "./Components/AddBlog";
import ScrollToTop from "./Components/ScrollToTop";
import Resuma from "./Components/Resuma";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/write-a-recomandation" component={WriteaRcomponent} />
          <Route exact path="/AllBlogs" component={AllBlogs} />
          <Route exact path="/resume" component={Resuma} />
          <Route exact path="/AllProject" component={AllProject} />
          <Route exact path="/project/add" component={ProjectAdd} />
          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BolgPage} />
          <Route component={NotFound} />
        </Switch>
        <Fotter />
      </BrowserRouter>
    </Provider>




  );
}

export default App;