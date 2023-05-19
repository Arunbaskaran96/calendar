import FullCalendar from '@fullcalendar/react'
import React, { useState } from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'


function Eg() {
//   const [data,setData]=useState([
//     //{
// //     "startTime": "Fri May 20 2018 21:30:00 GMT+0530 (IST)",
// //     "endTime": "Fri May 20 2018 22:00:00 GMT+0530 (IST)",
// //     "title": "Event 1616",
// //     "id": 1616
// // },
// // {
// //     "startTime": "Sat May 21 2018 03:00:00 GMT+0530 (IST)",
// //     "endTime": "Sat May 21 2018 03:30:00 GMT+0530 (IST)",
// //     "title": "Event 1617",
// //     "id": 1617
// // },
// // {
// //     "startTime": "Sun May 22 2018 11:30:00 GMT+0530 (IST)",
// //     "endTime": "Sun May 22 2018 13:00:00 GMT+0530 (IST)",
// //     "title": "Event 1618",
// //     "id": 1618
// // },
// // {
// //     "startTime": "Sat May 21 2018 20:00:00 GMT+0530 (IST)",
// //     "endTime": "Sat May 21 2018 20:15:00 GMT+0530 (IST)",
// //     "title": "Event 1619",
// //     "id": 1619
// // },
// {
//   "start": "2023-05-18",
//   // "endTime": "Sat May 21 2018 20:15:00 GMT+0530 (IST)",
//   "title": "Events",
//   "id": 1619
// }])

const datas=[
      {
    "startTime": "Fri May 20 2018 21:30:00 GMT+0530 (IST)",
    "endTime": "Fri May 20 2018 22:00:00 GMT+0530 (IST)",
    "title": "Event 1616",
    "id": 1616
},
{
    "startTime": "Sat May 21 2018 03:00:00 GMT+0530 (IST)",
    "endTime": "Sat May 21 2018 03:30:00 GMT+0530 (IST)",
    "title": "Event 1617",
    "id": 1617
},
{
    "startTime": "Sun May 22 2018 11:30:00 GMT+0530 (IST)",
    "endTime": "Sun May 22 2018 13:00:00 GMT+0530 (IST)",
    "title": "Event 1618",
    "id": 1618
},
{
    "startTime": "Sat May 21 2018 20:00:00 GMT+0530 (IST)",
    "endTime": "Sat May 21 2018 20:15:00 GMT+0530 (IST)",
    "title": "Event 1619",
    "id": 1619
}
]
  return (

      <VerticalTimeline>
        {
          datas.map((item,index)=>{
            return(
              <VerticalTimelineElement
              key={index}
              dateClassName='date'
              date={item.startTime}
              >
                <h3>{item.title}</h3>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
  )
}

export default Eg