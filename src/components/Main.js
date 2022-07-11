import { faBed, faToilet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { data } from "../csvjson";

const Main = () => {
  const [dataArray, setDataArray] = useState(data);

  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  today = year + "-" + month + "-" + day;

  const [date, setDate] = useState(today);

  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [type, setType] = useState();

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleOptionsLocation = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };
  const handleOptionsPrice = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };
  const handleOptionsType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = () => {
    let arr = [];
    for (var key in data) {
      if (
        data[key].owner_city === location &&
        date &&
        data[key].range === price &&
        data[key].property_type === type
      ) {
        arr.push(data[key]);
      }
    }
    setDataArray(arr);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 h-full">
      <div className="w-4/5 mb-14">
        <div className="flex justify-between items-center pt-16 flex-col md:flex-row">
          <h1 className="font-bold text-4xl p-3 md:p-0">Search properties for rent</h1>
          <input
            type="text"
            className="w-72 rounded-md border-2 py-2 px-4 outline-none"
            placeholder="Search here for anything"
          ></input>
        </div>
      </div>
      <div className="flex flex-col items-center w-4/5 rounded-lg justify-center p-4 bg-white md:flex-row md:justify-around">
        <div className="flex flex-col items-center md:items-start pb-2 md:pr-4 md:border-r-2 text-neutral-500 font-medium">
          <label>Location</label>
          <select
            className="font-bold text-xl text-black py-1 outline-none"
            onChange={handleOptionsLocation}
          >
            <option value="Evanston">Choose Location</option>
            <option value="Evanston">Evanston</option>
            <option value="Bloomington">Bloomington</option>
            <option value="Hickory">Hickory</option>
            <option value="Nashville">Nashville</option>
            <option value="Alexandria">Alexandria</option>
            <option value="North Vernon">North Vernon</option>
            <option value="Bedford">Bedford</option>
            <option value="Arnold">Arnold</option>
            <option value="Los Gatos">Los Gatos</option>
          </select>
        </div>
        <div className="flex flex-col items-center md:items-start pb-2 md:pr-4 md:border-r-2 text-neutral-500 font-medium">
          <label>When</label>
          <input
            type="date"
            min={today}
            value={date || ""}
            onChange={handleDate}
            className="text-xl font-bold text-black outline-none"
          />
        </div>
        <div className="flex flex-col items-center md:items-start pb-2 md:pr-4 md:border-r-2 text-neutral-500 font-medium">
          <label>Price</label>
          <select
            className="font-bold text-xl text-black py-1 outline-none"
            onChange={handleOptionsPrice}
          >
            <option value="$500-$2500">Choose Price</option>
            <option value="$500-$2500">$500-$2500</option>
            <option value="$2600-$4500">$2600-$4500</option>
            <option value="$4600-$7500">$4600-$7500</option>
          </select>
        </div>
        <div className="flex flex-col items-center md:items-start pb-2 md:pr-4 md:border-r-2 text-neutral-500 font-medium">
          <label>Property Type</label>
          <select
            className="font-bold text-xl text-black py-1 outline-none"
            onChange={handleOptionsType}
          >
            <option value="House">Choose Property Type</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
            <option value="Apartment">Apartment</option>
            <option value="Rooming House">Rooming House</option>
          </select>
        </div>
        <button
          className="mx-7 border-2 border-violet-600 py-2 px-6 font-semibold rounded-md bg-violet-600 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-center w-4/5 mt-12 mb-12 md:grid-cols-3 ">
        {dataArray.map((value, index) => {
          return (
            <div className="bg-white rounded-lg p-6 pb-10 relative">
              <img src={value.image} alt="" className="w-80 h-56 rounded-md pb-2" />
              <div>
                <h2 className="font-bold text-xl">{value.owner_name}</h2>
                <h4 className="text-violet-600 text-2xl font-bold mt-2 mb-2">
                  {value.price}
                  <span className="text-gray-400 font-medium text-lg">
                    /month
                  </span>
                </h4>
                <p className="text-gray-600 font-semibold">{`${value.owner_address}, ${value.owner_city}, ${value.owner_state}`}</p>
                <p className="bottom-2 border-t-2 absolute inline-block w-10/12">
                  <FontAwesomeIcon icon={faBed} />{" "}
                  {`${value.bedrooms} bedroom `}{" "}
                  <FontAwesomeIcon className="ml-2" icon={faToilet} />{" "}
                  {`${value.bathroom} bathroom`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
