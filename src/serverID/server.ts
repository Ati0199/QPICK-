interface Ielem {
  brendName: string;
  phone: [];
  id: string;
}

const getIDd = async () => {
  const res = await fetch("http://localhost:3344/phonedata");

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const elems: Ielem[] = await res.json();
  return elems.map((elem) => elem);
};

const x = await getIDd().then((id) => id);
console.log(
  x.map((item) => {
    item.id;
  }),
);

// fetch("https://api.example.com/data")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Parse the response body as JSON
//   })
//   .then((data) => {
//     console.log(data); // Work with the JSON data
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error.message); // Handle network errors or those manually thrown
//   });
