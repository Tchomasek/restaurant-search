import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kPMPjCcu2NBYJDu17DnP7ymNmDrvXSa13jQa6839HwnoZvSt7p46CKBD63w39AKh0IORLZuKWm06iX4vSeUIqh9-syv0YscHL73VJVU_91u8ahR4rcRUBkfyItVjYnYx",
  },
});
