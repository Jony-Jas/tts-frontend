import axios from "axios";

export default axios.create({
  baseURL: "https://backend-texttospeech.pagekite.me/",
});
