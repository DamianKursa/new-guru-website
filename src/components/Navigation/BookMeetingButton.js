import React from 'react'
import styled from 'styled-components'

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
`
const BookMeetingButton = () => {
  return (
    <MeetingButton>
      BOOK ET MØTE
    </MeetingButton>
  )
}

export default BookMeetingButton
