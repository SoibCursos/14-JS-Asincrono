const pelis = [
    {
      title: "Piratas del caribe",
      year: 2003,
    },
    {
      title: "Titanic",
      year: 1998,
    },
    {
      title: "Hackers",
      year: 1995,
    },
    {
      title: "Avatar",
      year: 2009,
    },
  ];
  console.log(pelis);
  const pelisJSON = JSON.stringify(pelis);// convierte un objeto a un string
  console.log(typeof pelisJSON);console.log(pelisJSON);
  
  let userJSON = '{"name":"John", "age":30, "car":null}';
  console.log(typeof userJSON);console.log(userJSON);
  
  const user = JSON.parse(userJSON);//convierte un string a un objeto
  console.log(typeof user);console.log(user);
  user.car = "BMW";
  
  console.log(user);
  userJSON = JSON.stringify(user);// convierte un objeto a un string
  console.log(userJSON);
