import React, {useState} from 'react';
import {Layout, Header, Navigation, Drawer, Content, Textfield, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    latitude: -2.483383,
    longitude: 117.890285,
    width: "100vw", //view width
    height: "100vh", //view height
    zoom: 4.5
  })
  return (
    <div>
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader fixedDrawer>
            <Header title="Title">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Content>
              <ReactMapGL {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/papuanengineer/ck06ijf1p2eu81dpbjqe547el"
                onViewportChange={(viewport)=>{setViewport(viewport);}}>
                Select a province
              </ReactMapGL>
            </Content>
        </Layout>
        </div>
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

export default App;
