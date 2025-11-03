import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { assets } from '../assets/assets'

const Activejobs = () => {
  return (
    <div>
         <Card>
        <CardMedia
        component='img'
        src={assets.activejobs}
        
        />
      </Card>
    </div>
  )
}

export default Activejobs
