import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello motas</p>
    <Link to="/about">Learn more about me</Link>
  </Layout>
);
