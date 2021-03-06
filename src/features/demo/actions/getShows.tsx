
import axios from "axios";

const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

const getImages = () => {
 let status = "pending";
 let result: any;
 let suspender = axios.get(`https://api.tvmaze.com/search/shows?q=party`)
 .then(
   (r) => {
     status = "success";
     result = r.data;
   },
   (e) => {
     status = "error";
     result = e;
   }
 );
 return {
   read() {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw result
      default:
        return result
    }
   },
 };
};

export const getShows = () =>{
  delay(5000);
  return getImages();
}