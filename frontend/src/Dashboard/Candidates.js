import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { assets } from '../assets/assets'

const Candidates = () => {
  return (
    <div>
        <Card>
        <CardMedia
        component='img'
        src={assets.candidates}
        
        />
      </Card>
    </div>
  )
}

export default Candidates
