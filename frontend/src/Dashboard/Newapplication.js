import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { assets } from '../assets/assets'

const Newapplication = () => {
  return (
    <div>
      <Card>
        <CardMedia
        component='img'
        src={assets.newapplication}
        
        />
      </Card>
    </div>
  )
}

export default Newapplication
