import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
// function Publications() {

//     useEffect(() => {
//         fetchMessages();
//     },[]);

//     const [state] = useState({
//         id: "",
//         authorName: "",
//         authorFirstname: "",
//         authorId: "",
//         content: "",
//         likes: "",
//         attachment: ""
//     })

//     const [messages, setMessages] = useState ([]);

//     const fetchMessages = (e) => {
//         const messageData = {
//             "id": state.id,
//             "authorName": state.authorName,
//             "authorFirstname": state.authorFirstname,
//             "authorId": state.authorId,
//             "content": state.content,
//             "likes": state.likes,
//             "createdOn": state.createdOn,
//             "attachment": state.attachment
//         }

//       axios.get("http://localhost:3000/api/messages/", messageData)
//           .then (function (response){
//             const messages = response.data;
//             setMessages(messages);
//             console.log(messages);
//           })
//     }

//     return (
//         <div>
//             <div key ={messages}>
//                 <h2>{messages.content}</h2>
//             </div>
//         </div>
//     )
// }

// function Publications() {
//   const [totalReactPackages, setTotalReactPackages] = useState(null);

//   useEffect(() => {
//       // GET request using axios inside useEffect React hook
//       axios.get('http://localhost:3000/api/messages/')
//           .then(function (response){
//             const messages = response.data;
//             setTotalReactPackages(messages);
//           })

//   // empty dependency array means this effect will only run once (like componentDidMount in classes)
//   }, []);

//   return (
//       <div className="card text-center m-3">
//           <h5 className="card-header">GET Request with React Hooks</h5>
//           <div className="card-body">
//               Total react packages: {totalReactPackages}
//           </div>
//       </div>
//   );
// }

function Publications() {
    const [totalReactPackages, setTotalReactPackages] = useState(null);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:3000/api/messages/')
            .then(response => setTotalReactPackages(response.data.total));
            console.log(response.data.total);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                Total react packages: {totalReactPackages}
            </div>
        </div>
    );
}


export default Publications;