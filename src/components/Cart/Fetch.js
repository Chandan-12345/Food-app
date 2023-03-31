// import React,{useState} from "react";
// // import { db } from "../../firebase";

// import 'firebase/firestore';

// const firestore = firebase.firestore();
// const Fetch = () =>{
//     const [allDocs, setAllDocs] = useState([]);

// // const db = firebase.firestore();
// function fetchAllData(e) {
// e.preventDefault();

// firestore.collection('products').get()
//   .then(querySnapshot => {
//     // const users = [];
//     querySnapshot.forEach(doc => {
//       // Get the document data
//       const user = doc.data();
//       user.id = doc.id;
//       setAllDocs(user);
//     });
//     // Do something with the users array
//   })
//   .catch(error => {
//     console.error(error);
//   });

// console.log(allDocs);
// }

// return(
//     <>
//         <h1>Fetching data</h1>
//         <button onClick={fetchAllData}>fetch</button>
//     </>
// )
// }

// export default Fetch;