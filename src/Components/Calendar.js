import React, { useEffect, useState } from 'react'
import './calendar.css'
import { formatDate } from '@fullcalendar/core'
import { add, eachHourOfInterval, format, isTomorrow, sub } from 'date-fns'
import { Link } from 'react-router-dom'
import { getData } from '../Logics/Logic'


function Calendar() {
    const[currentDate,setCurrentDate]=useState(new Date())
    const [list,setList]=useState([])
    const [event,setEvents]=useState([])



    useEffect(()=>{
        gettingData()
    },[currentDate])

    const gettingData=()=>{
        const data=window.localStorage.getItem('sampledata')
        var temp=JSON.parse(data)
        setList(temp)
        if(temp.length>0){
            let filter=temp.filter((item)=>{
                let x=new Date(item.startTime)
                let y=x.toISOString()
                if(formatDate(y)==formatDate(currentDate)){
                    return item
                }
            })
            setEvents(filter)
        }
    }


    const previousDate=()=>{
        const res=sub(currentDate,{days:1})
        setCurrentDate(res)
    }

    const nextDate=()=>{
        const res=add(currentDate,{days:1})
        setCurrentDate(res)
    }

    const removeItem=(id)=>{
        const temp=getData()
        let filtering=temp.filter((item)=>item.id!=id)
        localStorage["sampledata"]=JSON.stringify(filtering)
        alert("deleted")
        gettingData()
    }


  return (
    <div className='container main-container'>
        <div className='row line1' style={{textAlign:"center"}}>
            <div className='col-2'></div>
            <div className='col-2'>
                <button onClick={previousDate}>{"<<"}</button>
            </div>
            <div className='col-3 date'>
                {formatDate(currentDate)}
            </div>
            <div className='col-2'>
                <button onClick={nextDate}>{">>"}</button>
            </div>
            <div className='col-2'>
                <Link className='btn btn-info' to="/add">Add Event</Link>
            </div>
        </div>
        <div className='row' style={{marginTop:"50px"}}>
            <div className='col-3'></div>
            <div className='col-4' >
                {
                    event.length>0? event.map((item,index)=>{
                        let a=new Date(item.startTime)
                        let b=new Date(item.endTime)
                        var minute = a.getMinutes();
                        var hour = a.getHours();
                        var minute1 = b.getUTCMinutes();
                        var hour1 = b.getUTCHours();

                        return(
                            <div key={index} className='event-card'>
                                <div className='mini-card1'>
                                    <div><span>Title</span> : {item.title}</div>
                                    <div><span>Start Time</span> : {`${hour} : ${minute}`}</div>
                                    <div><span>End Time</span> : {`${hour1} : ${minute1}`}</div>
                                </div>
                                <div className='mini-card2'>
                                    <Link to={`/edit/${item.id}`} className='btn btn-secondary btn-sm'>Edit</Link>
                                    <button onClick={()=>removeItem(item.id)} className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                                </div>
                        )
                    }):<div className='nodata'>No event found</div>
                }
            </div>
            <div className='col-3'></div>
        </div>
    </div>
  )
}

export default Calendar