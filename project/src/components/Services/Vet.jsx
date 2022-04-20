import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Map } from "../Map";
import "./vet.css";
const API_KEY = "AIzaSyBwBBkHeQj8chcjlScjJY4SgLhfs7BjiTg";
//console.log(API_KEY);
//import "./vet.css";
const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092,
};

const libraries =['places']

export default function Vet() {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: API_KEY,
  //   libraries
  // });
  return (
    <div className="vet">
      <h2>Ветеринарные клиники</h2>
      <div id="map">Ближайшие ветеринарные клиники</div>
      <div className="map">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadc801913b3f75308c5102adb68af4a28ab335f973669b7fc4d92724dadfbfae&amp;source=constructor" width="500" height="400" frameborder="0"></iframe> 
    </div>
    </div>
  );
}
