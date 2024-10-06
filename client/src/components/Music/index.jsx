import React, { useEffect, useState } from 'react';
import '@mantine/core/styles/ColorPicker.css';
import { Container, Title, Text, Button } from '@mantine/core';
import { IconBrandSpotify } from '@tabler/icons-react'; // For Spotify icon
import { FaApple } from 'react-icons/fa'; // Import the Apple logo from react-icons
import classes from '@/assets/css/HeroImageRight.module.css';
const Music = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
        <div
          className={classes.root}
          style={{
            backgroundImage: `url('../assets/images/Music.JPG')` ,
            backgroundSize: 'cover', // Ensures the image covers the whole div
            backgroundPosition: 'left', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating
            height: '80vh', // Set the height to match the image
            position: 'relative', // To contain absolutely positioned elements
          }}
        >
          <Container size="lg">
            <div className={classes.inner}>
              <div 
                className={classes.content}
                style={{ 
                  transform: `translateY(${scrollY * -0.25}px)`, // Gives the content a parallax effect per M's request
                  marginTop: '600px', // Add margin at the top
                }}
              >
                <Title className={classes.title}>
                  {' '}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'yellow' }}
                  >
                    Spirit Seeds Wellness
                  </Text>{' '}
                  Sonic Healing Sounds
                </Title>
      
                <Text className={classes.description} mt={30}>
                  Listen to our Sonic Healing Sounds to unwind, relax, and discover new healing techniques.
                </Text>
                {/* Spotify Button */}
      <Button
        component="a" // Use an anchor tag
        href="https://open.spotify.com/artist/6g4m9dE8aiaMED3TP3wM40"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice
        variant="gradient"
        gradient={{ from: 'green', to: 'black' }}
        size="md"
        radius="xl"
      >
        <IconBrandSpotify size={20} style={{ marginRight: '8px' }} /> 
        Spotify
      </Button>

      {/* Apple Music Button */}
      <Button
      component="a" // Use an anchor tag
      href="https://music.apple.com/us/album/sonic-healing/1626747108" // Set the URL you want to link to
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security best practice
      variant="gradient"
      gradient={{ from: 'black', to: 'gray' }}
      size="md"
      radius="xl"
      >
      <FaApple size={20} style={{ marginRight: '8px' }} />
      Apple Music
      </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Purchase CD
                </Button>
                
              </div>
            </div>
          </Container>
        </div>
      );
};

export default Music;