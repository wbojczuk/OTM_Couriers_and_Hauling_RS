"use client"

import { useRef, useState, useEffect } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "./MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();
    const [currentDate, setCurrentDate] = useState("")


    useEffect(()=>{
        var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
        var localISOString = new Date(Date.now() - tzoffset)
          .toISOString()
          .slice(0, -1);
      
        // convert to YYYY-MM-DDTHH:MM
        const datetimeInputString = localISOString.substring(
          0,
          ((localISOString.indexOf("T") | 0) + 6) | 0
        );
        setCurrentDate(datetimeInputString)
    }, [])


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{
        const obj = Object.fromEntries(new FormData(formRef.current))
        //@ts-ignore
        obj.Time = new Date(obj.Time).toLocaleString("en-US", {timeZone: "America/New_York"});

        sendEmail(evt, setStatus, {
        
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: obj
    }, formRef.current)}}>

        <h3 id="estimateFormTitle">Request Availability!</h3>

        {/* START FIELDS */}
            
       
            <div className="input-wrapper">
                <input required type="text" name="Name" id="name_input" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <input required type="tel" name="Phone_Number" id="phonenum" placeholder={"Phone Number"} />
            </div>
            <div className={"input-wrapper"}>
                    <input required type="datetime-local" name="Time" id="dateInput" defaultValue={currentDate} />

                    
                </div>

            <div className="input-wrapper">
                <textarea required maxLength={5000} name="Details" id="messageInput" placeholder={"Additional details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className={`main-link`} id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
