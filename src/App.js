import React, {useState} from 'react';
import {Layout, Header, Navigation, Drawer, Content, Textfield, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import ReactMapGL from "react-map-gl";

function Headers() {
  return (
    <Header title="Title">
      <Textfield
        value=""
        onChange={() => {}}
        label="Search"
        expandable
        expandableIcon="search"
        />
    </Header>
  );
}

function Body() {
  const [viewport, setViewport] = useState({
    latitude: -2.483383,
    longitude: 117.890285,
    width: "100vw", //view width
    height: "100vh", //view height
    zoom: 4.5
  })
  return (
    <div className="body">
      <Content>
        <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/papuanengineer/ck06ijf1p2eu81dpbjqe547el"
          onViewportChange={(viewport)=>{setViewport(viewport);}}>
          Select a province
        </ReactMapGL>
      </Content>
    </div>
  );
}
function Footers() {
  return (
    <div className="foot">
      <Footer size="mini">
        <FooterSection type="left" logo="Title">
            <FooterLinkList>
                <a href="/">Help</a>
                <a href="/">Privacy & Terms</a>
            </FooterLinkList>
        </FooterSection>
        </Footer>
    </div>
  );
}


function App() {
  return (
    <div className="container">
      <div style={{height: '650px', position: 'relative'}}>
        <Layout fixedHeader fixedDrawer>
            <Headers />
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Body />
        </Layout>
      </div>
      <Footers/>
    </div>
  );
}

export default App;
