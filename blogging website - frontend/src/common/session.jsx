const storeInsession = (key, value) =>{
    sessionStorage.setItem(key,value);
}
const lookInSession = (key) =>{
    return sessionStorage.getItem(key)

}

const removeFromSession =(key) =>{
    return sessionStorage.removeItem(key)
}

const  logOutUser =() =>{
    sessionStorage.clear();
} 

export {storeInsession, lookInSession, removeFromSession, logOutUser}