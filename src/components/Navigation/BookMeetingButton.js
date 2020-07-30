import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import SmallBookingIcon from '../../assets/images/booking-icon.svg'

const MeetingButton = styled.button`
    background-color:#E2A05F;
    outline:none;
    border:none;
    height:45px;
    width:196px;
    color :white;
    font-size:0.8rem;
    font-weight:500;
    -webkit-box-shadow: 0px 0px 17px -2px rgba(163,163,163,1);
    -moz-box-shadow: 0px 0px 17px -2px rgba(163,163,163,1);
    box-shadow: 0px 0px 17px -2px rgba(163,163,163,1);
    @media (max-width: 992px) {
      height:45px;
      width:98px;
    }
`
const BookMeetingButton = () => {
  let windowSize
  const [width, setWidth] = useState(windowSize);
  
  const updateWidthAndHeight = () =>{
    if (typeof window !== 'undefined') {
      windowSize = window.innerWidth
        setWidth(windowSize)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
});
  return (
    <MeetingButton>
      {width <= 992 ? <SmallBookingIcon/> : "BOOK ET MØTE"}
    </MeetingButton>
  )
}

export default BookMeetingButton
