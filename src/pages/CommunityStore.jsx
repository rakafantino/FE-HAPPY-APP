import React, { useState } from 'react';
import '../styles/CommunityStore.css'
import ProductCard from '../components/ProductCard';
import { Footer } from '../components/Footer';
import CommunityNavbar from '../components/CommunityNavbar';
import HeaderCommunity from '../components/HeaderCommunity';
import { Container } from 'react-bootstrap';


const CommunityStore = () => {
  const [showMember, setShowMember] = useState(false);
  const handleShow = () => setShowMember(true);

  return (
    <>
      <HeaderCommunity handleShow={handleShow} />
      <CommunityNavbar />
      <Container className='contcs min-vh-100'>
        <ProductCard />
      </Container>
      <Footer />
    </>
  );
};

export default CommunityStore;
