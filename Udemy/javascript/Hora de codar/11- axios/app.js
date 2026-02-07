// 01- Instalação
console.log(axios);

// 02- Primeiro reuquest
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",

      {
        headers: {
          "Content-Type": "application/json",
          custom: "header"
        },
      },
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

// 03- Imprimindo dados da API
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();
  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    const email = document.createElement("p");

    email.textContent = user.email;

    div.appendChild(nameElement);
    div.appendChild(email);

    container.appendChild(div);
  });
};

printData();


// 05- Post
