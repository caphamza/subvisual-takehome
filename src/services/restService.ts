import axios from "axios";

import { baseURL } from "utils/constants";

export const get = async <T>(query: string | number): Promise<T> => {
  try {
    const res = await axios.get<T>(baseURL + query);
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e);
  }
};
