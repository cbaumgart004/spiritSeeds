/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'
import Abhyanga from './Abhyanga'
import ChiNeSang from './ChiNeSang'
import IntegrativeHealing from './IntegrativeHealing'
import ThaiCompress from './ThaiCompress'

const ServicesProvided = () => {
  return (
    <div>
      <IntegrativeHealing />
      <Abhyanga />
      <ChiNeSang />
      <ThaiCompress />
    </div>
  )
}

export default ServicesProvided
