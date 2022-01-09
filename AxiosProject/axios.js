import axios from "axios";


    function getUser(i){
    return new Promise(async (resolve,reject) => {
        const data = await axios(
            "https://jsonplaceholder.typicode.com/users/"+i
        );  
        resolve(data);
    });
};

function getPost(i){
    return new Promise(async (resolve,reject) => {
        const data = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId="+i
        );  
        resolve(data);
    });
};

(async () => {
        
    await getUser(1)
    .then((data) => console.log("Data:",data.data)).catch((e) => console.log(e));

    await getPost(1)
    .then((data) => console.log("Data:",data.data)).catch((e) => console.log(e));
})();       