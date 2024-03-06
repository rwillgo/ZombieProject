import axios from "axios";

const survivorsUrl =
  process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PATH_SURVIVORS;

function createRequest(url, method, data) {
  return axios({
    method,
    url,
    data,
    headers: { "Content-Type": "application/json" },
  });
}

export function createSurvivor(survivor) {
  const data = JSON.stringify(survivor);
  return createRequest(survivorsUrl, "post", data);
}

export function updateSurvivor(survivorId) {
    //
}

export function getSurvivors() {
  return createRequest(survivorsUrl, "get", null);
}
