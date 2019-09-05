import React, {useState} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import ReactMapGL from "react-map-gl";

function Headers() {
  return (
    <Header title="Nusa Nation" scroll>
      <Navigation>
        <a href="/">Projects</a>
        <a href="/">About</a>
        <a href="/">Sign In</a>
        <a href="/">Join US</a>
      </Navigation>
    </Header>
  );
}

function Drawers(){
  return(
    <Drawer title="Provinces">
      <Navigation>
        <a href="/">Aceh</a>
        <a href="/">North Sumatra</a>
        <a href="/">West Sumatra</a>
        <a href="/">Riau</a>
        <a href="/">Riau Archipelago/Islands</a>
        <a href="/">Jambi</a>
        <a href="/">Bengkulu</a>
        <a href="/">South Sumatra</a>
        <a href="/">Bangka Belitung Islands</a>
        <a href="/">Lampung</a>
        <a href="/">Banten</a>
        <a href="/">Jakarta</a>
        <a href="/">West Java</a>
        <a href="/">Central Java</a>
        <a href="/">Yogyakarta</a>
        <a href="/">East Java</a>
        <a href="/">Bali</a>
        <a href="/">West Nusa Tenggara</a>
        <a href="/">East Nusa Tenggara</a>
        <a href="/">West Kalimantan</a>
        <a href="/">Central Kalimantan</a>
        <a href="/">South Kalimantan</a>
        <a href="/">East Kalimantan</a>
        <a href="/">North Kalimantan</a>
        <a href="/">North Sulawesi</a>
        <a href="/">Gorontalo</a>
        <a href="/">Central Sulawesi</a>
        <a href="/">West Sulawesi</a>
        <a href="/">South Sulawesi</a>
        <a href="/">Southeast Sulawesi</a>
        <a href="/">North Maluku</a>
        <a href="/">Maluku (The Moluccas)</a>
        <a href="/">West Papua</a>
        <a href="/">Papua</a>
      </Navigation>
    </Drawer>
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
          mapStyle="mapbox://styles/papuanengineer/ck06hm0ms2dzj1dpb3wt7nhpl"
          onViewportChange={(viewport)=>{setViewport(viewport);}}>
        </ReactMapGL>
      </Content>
    </div>
  );
}



function App() {
  return (
    <div className="container">
      <div className="demo-big-content">
    <Layout>
            <Headers />
            <Drawers/>
            <Body />
        </Layout>
      </div>
    </div>
  );
}

export default App;
