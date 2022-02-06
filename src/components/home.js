import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
function home() {
  return (
      <Container>
         <ImgSlider />
         <Viewer />
      </Container>
  );
}

export default home;

const Container = styled.main`
  min-height:calc(100vh - 70px);
  padding:0 calc(3.5vw + 5px);
  position:relative;

  overflow-x:hidden;

  &:before{
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:url('/images/home-background.png') center center / cover
    no-repeat fixed;
    content:"";
    z-index:-1;
    position:absolute;

  }
`