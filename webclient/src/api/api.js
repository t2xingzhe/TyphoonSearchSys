import axios from "axios";

export const host = "http://127.0.0.1:8000";
// export const host ="http://127.0.0.1:64807";

axios.defaults.withCredentials = true;
axios.defaults.headers = {};

export const filterByComplexCondition = (
  level,
  wsm,
  bp,
  startMonth,
  endMonth
) => {
  let url = `${host}/gis/filter/complex/?level=${level}&wsm=${wsm}&bp=${bp}&startMonth=${startMonth}&endMonth=${endMonth}`;
  return axios.get(url);
};

export const getTyphoonCodeByComplexCondition = (level, wsm, bp, startMonth, endMonth, from, to) => {
  let url = `${host}/gis/filter/GetTyphoonCodeByComplexCondition/?level=${level}&wsm=${wsm}&bp=${bp}&startMonth=${startMonth}&endMonth=${endMonth}&from=${from}&to=${to}`
  return axios.get(url);
}
