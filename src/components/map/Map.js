import React, { Component } from 'react';
import '../css/Map.css';
// import { Map } from 'react-arcgis';
import EsriLoaderReact from 'esri-loader-react';
import {reactLocalStorage} from 'reactjs-localstorage';


class LandingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedFapLat: "",
      clickedFapLong: "",
      BaseMap: props.SuperMap
    };
    this.getLatLong = this.getLatLong.bind(this);
    this.handleLatLong = this.handleLatLong.bind(this);
    console.log(props);
  }

  handleLatLong() {
    this.props.callbackFromApp(this.state);
  }

  getLatLong(response){
    this.setState({

        clickedFapLat: response.results[0].mapPoint.latitude,
        clickedFapLong: response.results[0].mapPoint.longitude

    });
    this.handleLatLong();
  }
  getCurrenBaseMap(){
    var i = reactLocalStorage.get('var', this.state.BaseMap);
    var result = (typeof i === 'string');
    if (result){
      return i;
    }
    else
    {
      return 'streets';
    }
  }

  render() {
      //console.log(this.props.SuperMap)
       const options = {
          url: 'https://js.arcgis.com/4.5/'
        };


        return (
          <div className="App">
            <EsriLoaderReact
              options={options}
              modulesToLoad={['esri/Map', 'esri/views/MapView', "esri/layers/FeatureLayer"]}
              onReady={({
                loadedModules: [Map, MapView, FeatureLayer], containerNode}) => {

                  var Land_Map = new Map (
                    {basemap: this.getCurrenBaseMap()}
                    // {basemap: this.props.SuperMap}
                    // {basemap: 'topo-vector'}
                  )
                  var Land_View = new MapView({
                      container: containerNode,
                      center: [-114.316109,  48.197777],
                      zoom: 10,
                      map: Land_Map
                  })

                  var popupTemplate = { // autocasts as new PopupTemplate()
                    title: "Fishing Site Details<p>{NAME}</p>",
                    content:
                      "<ul><li> Boat Facility: {BOAT_FAC}</li>" +
                      "<li>Camping: {CAMPING}</li>" +
                      "<li>Site Web Page: <a href={WEB_PAGE} target='blank'>Montana Fish, Wildlife & Parks</a></li></ul>"
                  };

                  var featureLayer = new FeatureLayer({
                    //url:'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyBasemap/Topo',
                     url: "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer",
                    //url: "https://services3.arcgis.com/Cdxz8r11hT0MGzg1/arcgis/rest/services/FWPLND_FAS_POINTS/FeatureServer/0",
                    outFields: ['*'],
                    popupTemplate: popupTemplate
                  });

                  Land_Map.add(featureLayer);

                  Land_View.on("click", event => {
                    Land_View.hitTest(event)
                      .then(this.getLatLong);
                  })



                  //Gives results from the data table
                  Land_View.whenLayerView(featureLayer).then(function(lyrView) {
                    lyrView.watch("updating", function(val) {
                      if (!val) { // wait for the layer view to finish updating

                        // query all the features available for drawing.
                        lyrView.queryFeatures().then(function(results) {
                            // console.log(results);
                          // graphics = results;

                          // var fragment = document.createDocumentFragment();

                          // results.forEach(function(result, index) {
                          //   var attributes = result.attributes;
                            // console.log(attributes.NAME + ", " + attributes.WEB_PAGE);

                            // var name = attributes.ZIP + " (" +
                            //   attributes.PO_NAME + ")"

                          //   // Create a list zip codes in NY
                          //   var li = document.createElement("li");
                          //   li.classList.add("panel-result");
                          //   li.tabIndex = 0;
                          //   li.setAttribute("data-result-id", index);
                          //   li.textContent = name;

                          //   fragment.appendChild(li);
                          // });
                        //   // Empty the current list
                        //   listNode.innerHTML = "";
                        //   listNode.appendChild(fragment);
                         });
                      }
                    });
                  });

                }}

              onError={error => console.error(error)}
            />
          </div>
        );
      }
    }

export default LandingMap;
