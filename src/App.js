import Layout from "./components/Layout";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Builder from "./pages/Builder/Builder";
import SampleView from "./pages/SampleView";
import { useEffect, useState } from "react";
import Publish from "./pages/publish";
import View from "./pages/View";
import Editor from "./pages/Builder/Edit";
import Home from "./pages/Home";

function App() {
  const [builderData, setBuilderData] = useState(false)
  const [title,setTitle] = useState("Free CV Builder | 2021")
 
  return (
    <Router>
      <Switch>
        <Layout title={title}>

          <Route path="/builder">
            <Builder getdata={(data) => setBuilderData(data)} data={builderData} />
          </Route>
          <Route path="/sample-view">
            <SampleView data={builderData} />
          </Route>
          <Route path="/publish">
            <Publish data={builderData} makeClear={()=>setBuilderData(false)}/>
          </Route>
          <Route path="/view">
            <View data={builderData} makeTitle={(title)=>setTitle(title)}/>
          </Route>
          <Route path="/edit">
            <Editor getdata={(data) => setBuilderData(data)}/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
