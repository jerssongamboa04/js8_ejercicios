//  Ejercicios
// Ejercicios: Nivel 1
// Crear un objeto vacío llamado dog

// const dog = {};

// Imprime el objeto dog en la consola
// console.log(dog);

// Añade las propiedades name, legs, color, age y bark para el
//  objeto dog. La propiedad bark es un método que devuelve woof woof

// Obtener name, legs, color, age y el valor de bark del objeto dog

// const dog = {
//     name2:"roma",
//     legs: 4,
//     color:"white",
//     age: 1,
//     bark:"woof woof",
// };
// console.log(dog);

// Establecer nuevas propiedades al objeto dog: breed, getDogInfo
// dog.breed = 4;
// dog.getDogInfo = "husky";
// console.log(dog);


//==================Ejercicios: Nivel 2=============================

// Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.

// Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Alfred: {
//     email: 'alfred@alfred.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }

// function contarUsuarios(users) {
//     let conectados = 0;
//     let conPuntos = 0;
  
//     for (let user in users) {
//       if (users[user].isLoggedIn) {
//         conectados++;
//       }
//       if (users[user].points > 50) {
//         conPuntos++;
//       }
//     }
  
//     return { conectados, conPuntos };
//   }
  
//   let resultado = contarUsuarios(users);
//   console.log(resultado); 
  
  
  
// Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios

// function merm(users) {
// let desarrolador = 0;

// for (let user in users) {
    
//     if (users[user].skills)
//     desarrolador++;
// }

// }


// Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original

// const newUsers = { ...users };
// newUsers["jersson"] = {
//   email: "jersson@gmail.com.com",
//   skills: ["HTML", "CSS", "JavaScript"],
//   age: 25,
//   isLoggedIn: true,
//   points: 70,
// };
// console.log(newUsers); 
// console.log(users); 


// Obtener todas las claves o propiedades del objeto usuarios

// const keys = Object.keys(users);
// console.log(keys);


// Obtener todos los valores del objeto usuarios
// const values = Object.values(users);
// console.log(values);


// Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.

// const paises = {
//   colombia: {
//     capital: "Bogotá",
//     poblacion: 50372424,
//     idiomas: ["español"],
//   },
//   francia: {
//     capital: "París",
//     poblacion: 66987244,
//     idiomas: ["francés"],
//   },
//   alemania: {
//     capital: "Berlín",
//     poblacion: 83019200,
//     idiomas: ["alemán"],
//   },
// };

// for (const [pais, info] of Object.entries(paises)) {
//   console.log(`País: ${pais}`);
//   console.log(`Capital: ${info.capital}`);
//   console.log(`Población: ${info.poblacion}`);
//   console.log(`Idiomas: ${info.idiomas.join(", ")}`);
//   console.log("");
// }


// Ejercicios: Nivel 3

// // Crea un objeto literal llamado personAccount. Tiene las propiedades
//  firstName, lastName, incomes, expenses y tiene los metodos totalIncome, 
//  totalExpense, accountInfo,addIncome, addExpense y accountBalance. 
//  Incomes es un conjunto de ingresos y su descripción y expenses es un 
//  conjunto de ingresos y su descripción.

// **** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()

// const users = [
//   {
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "08/01/2020 9:00 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "fg12cy",
//     username: "Alfred",
//     email: "alfred@alfred.com",
//     password: "123456",
//     createdAt: "08/01/2020 9:30 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "zwf8md",
//     username: "Brook",
//     email: "brook@brook.com",
//     password: "123111",
//     createdAt: "08/01/2020 9:45 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "eefamr",
//     username: "Martha",
//     email: "martha@martha.com",
//     password: "123222",
//     createdAt: "08/01/2020 9:50 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//   },
// ];

// const products = [
//   {
//     _id: "eedfcf",
//     name: "mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },
// ];
// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación

// El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. a. Crear una función llamada rateProduct que califique el producto b. Crear una función llamada averageRating que calcule la valoración media de un producto

// Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like