export const increaseCounter = () => {
  return fetch(`${import.meta.env.VITE_NODE_APP_URL}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ instanceID: `${import.meta.env.VITE_INSTANCE_ID}` })
  }).then((response) => {
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};