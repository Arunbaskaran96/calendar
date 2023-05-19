import { useFormik } from 'formik'
import React from 'react'
import { addData, getData } from '../Logics/Logic'
import { Link, useNavigate } from 'react-router-dom'




function Add() {
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            id:Math.floor(Math.random()*1000000),
            title:"",
            startTime:"",
            endTime:""
        },
        validate:()=>{},
        onSubmit:(value)=>{
            let temp=getData()
            let res=[...temp,value]
            localStorage["sampledata"]=JSON.stringify(res)
            alert("added")
            nav("/")
        }
    })

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link className='btn btn-info' to='/'>Back</Link>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-4'>
                <label>id</label><br/>
                <label>title</label><br/>
                <label>startTime</label><br/>
                <label>EndTime</label><br/>
            </div>
            <div className='col-4'>
                <input name='id' value={formik.values.id}/><br/>
                <input name='title' type='text' value={formik.values.title} onChange={formik.handleChange}/><br/>
                <input name='startTime' value={formik.values.startTime} type='datetime-local' onChange={formik.handleChange}/><br/>
                <input name='endTime' type='datetime-local' value={formik.values.endTime} onChange={formik.handleChange}/><br/>
                <input className='btn btn-success' type='submit' value="Submit" />
            </div>
        </div>
        </form>
    </div>
  )
}

export default Add