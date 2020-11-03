import React from 'react'
import './App.css';
import Layout from "./app/shared/components/layouts/layout/layout";
import Content from "./app/shared/components/content/content";
import Catalog from "./app/components/pages/catalog/catalog";


function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <Catalog />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
