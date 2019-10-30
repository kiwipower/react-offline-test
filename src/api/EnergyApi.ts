interface Response {
  data: {
    from: string;
    to: string;
    generationmix: [];
  };
}

interface ErrorMessage {
  message: string;
}

function EnergyApi() {
  function list() {
    return new Promise((resolve, reject) => {
      fetch("https://api.carbonintensity.org.uk/generation")
        .then(response => response.json())
        .then((data: Response) => {
          resolve(data.data);
        })
        .catch((err: ErrorMessage) => {
          reject(new Error(err.message));
        });
    });
  }
  return {
    list
  };
}

export default EnergyApi();
