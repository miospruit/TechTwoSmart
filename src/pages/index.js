import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Project from '@sections/Project';
import Onderzoek from '@sections/Onderzoek';
import Ontwerp from '@sections/Ontwerp';
import Oplevering from '@sections/Oplevering';
import Ontwikkel from '@sections/Ontwikkel';

import Team from '@sections/Team';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Project />
    <Onderzoek />
    <Ontwerp />
    <Ontwikkel />
    <Oplevering />
    <Team />
    <Footer />
  </Layout>
);

export default IndexPage;
