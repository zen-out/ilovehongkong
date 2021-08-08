import "./App.css";
import axios from "redaxios";
import { data } from "./data/library";
import { useState, useEffect } from "react";
import LibraryCard from "./components/LibraryCard";
import LibraryList from "./components/LibraryList";

function App() {
  const [libraryList, setLibraryList] = useState(data);
  //   const [libraryList, setLibraryList] = useState([
  //     {
  //       GMID: "OFOKNtKRCl",
  //       Northing: 833554,
  //       Easting: 820521,
  //       Dataset: "Libraries",
  //       FacilityName: "Yuen Long Public Library",
  //       Address:
  //         "G-1/F, Yuen Long Leisure & Cultural Building, 52 Ma Tin Road, Yuen Long, N.T.",
  //       數據集: "圖書館",
  //       設施名稱: "元朗公共圖書館",
  //       地址: "新界元朗馬田路52號元朗文化康樂大樓地下及一樓",
  //       LibraryType: "STATIC LIBRARY",
  //       圖書館種類: "固定圖書館",
  //       District: "YUEN LONG",
  //       地區: "元朗",
  //       OpeningHours: "N.A.",
  //       開放時間: "N.A.",
  //       Telephone: "N.A.",
  //       聯絡電話: "N.A.",
  //       FaxNumber: "N.A.",
  //       傳真號碼: "N.A.",
  //       EmailAddress: "N.A.",
  //       電郵地址: "N.A.",
  //       Website:
  //         "http://www.hkpl.gov.hk/en/locations/yuen-long/library/yuen-long.html",
  //       網頁: "http://www.hkpl.gov.hk/tc/locations/yuen-long/library/yuen-long.html",
  //       LastUpdate: "2017-06-14 09:08:58",
  //     },
  //     {
  //       GMID: "rHipDULeLN",
  //       Northing: 826683,
  //       Easting: 839146,
  //       Dataset: "Libraries",
  //       FacilityName: "Yuen Chau Kok Public Library",
  //       Address:
  //         "High Block of Yuen Chau Kok Complex, 35 Ngan Shing Street, Sha Tin",
  //       數據集: "圖書館",
  //       設施名稱: "圓洲角公共圖書館",
  //       地址: "沙田銀城街35號圓洲角綜合大樓高座",
  //       LibraryType: "STATIC LIBRARY",
  //       圖書館種類: "固定圖書館",
  //       District: "SHA TIN",
  //       地區: "沙田",
  //       OpeningHours: "N.A.",
  //       開放時間: "N.A.",
  //       Telephone: "N.A.",
  //       聯絡電話: "N.A.",
  //       FaxNumber: "N.A.",
  //       傳真號碼: "N.A.",
  //       EmailAddress: "N.A.",
  //       電郵地址: "N.A.",
  //       Website:
  //         "https://www.hkpl.gov.hk/en/locations/sha-tin/library/yuen-chau-kok.html",
  //       網頁: "https://www.hkpl.gov.hk/tc/locations/sha-tin/library/yuen-chau-kok.html",
  //       LastUpdate: "2017-04-05 09:47:40",
  //     },
  //   ]);
  useEffect(() => {}, []);
  const mapped2 = libraryList.map((item, index) => {
    console.log(item.Address);
    let website = item.Website;
    console.log(item);
    let address = item.Address;
    let name = item.FacilityName;
    return (
      <div className="card m-2" key={index}>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5>{address}</h5>
          {website}
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Seeing Hong Kong with Imagination</h1>
      <h1>hello</h1>
      {libraryList[0].LastUpdate}
      {mapped2}

      <p>
        I think I hate it here. And it's because I'm not
        using the right set of tools to see the city.{" "}
      </p>
    </div>
  );
}

export default App;
