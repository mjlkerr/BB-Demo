import React, { ReactElement } from "react";
import './Demo.css'
import { getShows, delay } from "./actions/getShows";

const resource = getShows();

//wait a little longer so we can see the delay
delay(2000);

const Demo = (): ReactElement => {
  const shows = resource?.read();
  return (
    <div className="Demo">
      {shows?.map((show: 
        { show: 
          { image: { original: string | undefined; }; 
        }; 
      }, index: React.Key | null | undefined) => (
        <div key={index}
        className="Demo-container">
          <img
            className="Demo-image"
            src={show.show.image ? show.show.image.original : ""}
            alt="Show Poster"
          />
        </div>))}
    </div>
  )
}
export default Demo;