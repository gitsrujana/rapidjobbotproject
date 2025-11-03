import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { assets } from '../assets/assets'

const shortlist = () => {
  return (
    <div>
    
         <Card>
        <CardMedia
        component='img'
        src={assets.shortlisted}
        
        />
      </Card>
   
  




    </div>
  )
}

export default shortlist
