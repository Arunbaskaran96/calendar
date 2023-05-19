export const getData=()=>{
    let result=JSON.parse(localStorage["sampledata"])
    return result
}

export const getDataById=(id)=>{
    let temp=getData()
    let filtering=temp.find((item)=>item.id==id)
    return filtering
}

export const addData=(value)=>{
    let temp=getData()
    let res=temp.push(value)
    localStorage["sampledata"]=JSON.stringify(res)
}


export const editData=(id,value)=>{
    let temp=getData()
    let filter=temp.filter((item)=>item.id!=id)
    let res=filter.push(value)
    localStorage["sampledata"]=JSON.stringify(res)
}

export const deleteData=(id)=>{
    let temp=getData()
    let filter=temp.filter((item)=>item.id!=id)
    localStorage["sampledata"]=JSON.stringify(filter)
}