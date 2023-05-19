import React, { useEffect, useState } from 'react'
import { getData, getDataById } from '../Logics/Logic'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import './calendar.css'

function Edit() {
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            title:"",
            startTime:"",
            endTime:""
        },
        validate:()=>{},
        onSubmit:(value)=>{
            let temp=getData()
            let res=temp.filter((item)=>item.id!=id)
            res.push(value)
            localStorage["sampledata"]=JSON.stringify(res)
            alert('updated')
            nav("/")
        }
    })
    let {id}=useParams()

    useEffect(()=>{
        var x=getDataById(id)
        formik.setValues(x)
    },[])
  return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row edit-conatiner'>
            <div className='col-4' style={{textAlign:"end"}}>
                <label className='edit-label'>Title</label><br/>
                <label className='edit-label'>Start Time</label><br/>
                <label className='edit-label'>End Time</label><br/>
            </div>
            <div className='col-6'>
                <input  className='edit-int' name='title' onChange={formik.handleChange} value={formik.values.title}/><br/>
                <input  className='edit-int'  name='startTime' onChange={formik.handleChange} value={formik.values.startTime}/><br/>
                <input  className='edit-int'  name='endTime' onChange={formik.handleChange} value={formik.values.endTime}/><br/>
                <input className='btn btn-success' type='submit' value="Submit"/><br/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Edit