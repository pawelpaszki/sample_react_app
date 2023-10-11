import axios from "axios";

export const increaseCounter = async () => {

  const resp = await axios({
    method: 'post',
    url: '/api',
    data: { instanceID: `${import.meta.env.VITE_INSTANCE_ID}` }
  });
  return resp.data;
};