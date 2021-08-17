import axios from "axios";

// secret delete link : https://designer.mocky.io/manage/delete/df2e6b52-52d6-450c-9d00-2b6890b37b4e/lNONRohE2ebrXifk8jnaKxG5oR57Za7s709H
const loadEstablishments = () => {
  return axios
    .get("https://run.mocky.io/v3/df2e6b52-52d6-450c-9d00-2b6890b37b4e")
    .then((response) => response.data);
};

export const expoService = {
  loadEstablishments,
};
