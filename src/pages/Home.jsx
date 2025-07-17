import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
}

const Home = () => {
  const [value, setValue] = useState({
    title: "",
    lat: "",
    lng: "",
  });

  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    fetchLandmark();
  }, [])

  const fetchLandmark = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/landmark');
      // console.log(res.data.result);
      setLandmarks(res.data.result);

    } catch (error) {
      console.log(error);

    }
  }


  const hdlAddMarker = async (e) => {
    e.preventDefault();
    // Go Go Go CC#20
    // Save me please!!!!
    const { title, lat, lng } = value;
    console.log(value);
    try {
      const res = await axios.post('http://localhost:8000/api/landmark', {
        title: title,
        lat: lat,
        lng: lng,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlMapClick = (latlng) => {
    setValue({
      ...value,
      lat: latlng.lat.toFixed(6),
      lng: latlng.lng.toFixed(6),
    });
  };
  return (
    <div className="flex h-screen">
      {/* แผนที่ทางซ้าย */}
      <div className="flex-1">
        <MapContainer
          className="h-full w-full"
          center={[13.7563, 100.5018]}
          zoom={7}
        >

          {/* That check box on top right */}
          <LayersControl>
            <LayersControl.BaseLayer name="OSM" checked >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Image" >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>

            <LayersControl.Overlay name='Landmark' checked>
              <LayerGroup>
                {landmarks.map((item) => {
                  return (
                    <Marker key={item.id} position={[item.lat, item.lng]}>
                      <Popup>{item.title}</Popup>
                    </Marker>)
                })}
              </LayerGroup>
            </LayersControl.Overlay>


          </LayersControl>

          <MapClickHandler onMapClick={hdlMapClick} />

          {/* Show marker เมื่อคลิก */}
          {value.lat && <Marker position={[value.lat, value.lng]} />}
        </MapContainer>
      </div>

      {/* ฟอร์มทางขวา */}
      <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
        <h2 className="text-xl font-bold mb-4">เพิ่มจุดหมายบนแผนที่</h2>
        <div className="space-y-4">
          <form onSubmit={hdlAddMarker}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ชื่อสถานที่
              </label>
              <input
                type="text"
                name="title"
                value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })}
                placeholder="กรอกชื่อสถานที่"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ละติจูด (Latitude)
              </label>
              <input
                type="number"
                name="lat"
                value={value.lat}
                placeholder="Latitude"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ลองจิจูด (Longitude)
              </label>
              <input
                type="number"
                name="lng"
                value={value.lng}
                placeholder="Longitude"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;