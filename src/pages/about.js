import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>This is my personal website</p>
      <Link to="/">back to Home</Link>
    </Layout>
  );
};

export default About;
