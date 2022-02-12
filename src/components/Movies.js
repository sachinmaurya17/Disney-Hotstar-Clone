import React from 'react';
import styled from 'styled-components';
function Movies() {
  return (
      <Container>
        <h4>Recommended for You </h4>
        <Content>
            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>
            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>
            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>
            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>


            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>


            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>


            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>

            <Wrap>
                <img src="https://i.pinimg.com/736x/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
            </Wrap>
            
        </Content>
        
      </Container>
  );
}

export default Movies;


const  Container = styled.div`
    margin-bottom:10px;
`

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));

`
const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer ;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8)
    }
`