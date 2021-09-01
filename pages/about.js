import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const About = () => {
  return <>
    <div>about page</div>
    <Link href='/'>Home</Link>
      <Button variant="contained" color="primary">
        Hello hogehoge!
      </Button>
  </>
};

export default About;

