export const incNum = (num: any)=>{
    return {
        type: "INREMENT",
        param: num,
    }
}
export const decNum = ()=>{
    return {
        type: "DECREMENT"
    }
}

// export const changeTheString = (str: any)=>{
//     return {
//         type: "cngStr",
//         param: str
//     }
// }

export const reduxData = (obj: any)=>{
    return {
        type: "userData",
        param: obj
    }
}
export const reduxDataAdd = (obj: any)=>{
    return {
        type: "userDataAdd",
        param: obj
    }
}