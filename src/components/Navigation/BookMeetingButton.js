import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import SmallBookingIcon from '../../assets/images/booking-icon.svg'
import {useSpring, animated} from 'react-spring'
const MeetingButton = styled(animated.button)`
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
    @media (max-width: 487px) {
      height:30px;
      width:49px;
    }
`
const BookMeetingButton = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  let windowSize
  const [width, setWidth] = useState(windowSize);
  
  const updateWidthAndHeight = () =>{
    if (typeof window !== 'undefined') {
      windowSize = window.innerWidth
        setWidth(windowSize)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
});
  return (
    <MeetingButton style={props}>
      {width <= 992 ? <SmallBookingIcon/> : "BOOK ET MØTE"}
    </MeetingButton>
  )
}

export default BookMeetingButton
