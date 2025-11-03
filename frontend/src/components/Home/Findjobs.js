import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { assets } from '../../assets/assets'


const Findjobs = () => {
  return (
    <div>
       <Card>
        <CardMedia
        component='img'
        src={assets.findjobs}
        
        />
      </Card>
    </div>
  )
}

export default Findjobs
