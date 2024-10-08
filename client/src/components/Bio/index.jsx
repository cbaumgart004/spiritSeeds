/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
const Bio = () => {
  return (
    <div
      className={classes.root}
      style={{
        marginTop: '30vh',
        backgroundImage: `url('../assets/images/Bio.JPG')`,
        backgroundSize: 'cover', // Ensures the image covers the whole div
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating
        position: 'relative', // To contain absolutely positioned elements
        height: '100vh', // Ensure the image covers the whole div
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.gradientText}>Bio</span> for Melissa
              Carey
            </Title>

            <Text className={classes.description} mt={30}>
              Melissa is an artist, who expresses life as a dance, through
              massage from several ancient modalities and practice in yoga,
              mantra, music, and meditation. She seeks to create a space where
              people feel comfortable to deeply feel and express themselves. Her
              journey to her center began with yoga; she began practicing in
              high school finding personal growth and healing. She continued on
              to massage school and fell in love with Thai Massage, in part due
              to its yogic roots. Traveling to follow her teachers, Melissa
              studied near and far for the past ten years, developing her skills
              and practicing as a massage therapist. Her path led to further
              study in Yoga, Religious Studies, Music and Ayurveda at Naropa
              University, earning her Bachelors degree in Traditional Eastern
              Arts. She\’s done multiple training sessions with some of the
              forefront teachers in Trauma Informed Yoga, as well as Aerial
              Yoga, Partner Yoga, and Sound Healing. She now teaches at Moving
              Beyond Trauma in Lafayette and Medicine Horse as well as, at Soul
              Tree Yoga. Creating a sense of community in practice can help us
              all to find our true gifts and grow into our fullest expression of
              ourselves. By offering one on one sessions and group classes,
              Melissa hopes to lead each person back to their depth of self,
              feeling wholeness, and activate the body\’s innate wisdom to heal.
            </Text>
            <Link to="/">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Bio
