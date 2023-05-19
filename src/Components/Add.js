import { useFormik } from 'formik'
import React from 'react'
import { getData } from '../Logics/Logic'
import { Link, useNavigate } from 'react-router-dom'
import './calendar.css'




function Add() {
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            id:Math.floor(Math.random()*1000000),
            title:"",
            startTime:"",
            endTime:""
        },
        validate:(value)=>{
            let error={}

            if(!value.title || !value.startTime || !value.endTime){
                error.fields="Please Enter the title"
            }
            return error
        },
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
            <div className='col-2' style={{marginTop:"20px"}}>
                <Link className='btn btn-info' to='/'>Back</Link>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div className='row add-container'>
            <div className='col-4' style={{textAlign:'end'}}>
                <label className='add-label'>Id :</label><br/>
                <label className='add-label'>Title :</label><br/>
                <label className='add-label'>StartTime :</label><br/>
                <label className='add-label'>EndTime :</label><br/>
            </div>
            <div className='col-4'>
                <input className='add-int' name='id' value={formik.values.id}/><br/>
                <input className='add-int' name='title' type='text' value={formik.values.title} onChange={formik.handleChange}/><br/>
                <input className='add-int' name='startTime' value={formik.values.startTime} type='datetime-local' onChange={formik.handleChange}/><br/>
                <input className='add-int' name='endTime' type='datetime-local' value={formik.values.endTime} onChange={formik.handleChange}/><br/>
                <span style={{color:"red"}}>{formik.errors.fields}</span><br/>
                <input className='btn btn-success' type='submit' value="Submit" />
            </div>
        </div>
        </form>
    </div>
  )
}

export default Add