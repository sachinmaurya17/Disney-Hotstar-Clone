import React from 'react';
import styled from 'styled-components';
function Detail() {
  return (
    <Container>
        <Background>
            <img src ="https://wallpapercave.com/wp/wp3787493.jpg" />
        </Background>
        <ImageTitle>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/dahvxfj-85b61e1b-00b3-4f1e-86ea-9c184314fa23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGFodnhmai04NWI2MWUxYi0wMGIzLTRmMWUtODZlYS05YzE4NDMxNGZhMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zwZwOq5lYRMqzXg9IT-G_8j9s9EyPIUPixApyg5z-VQ" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" />
            </GroupWatchButton>
            
        </Controls>

        <SubTitle>
            2018 . 7m . Family, Fantansy, kids, Animation
        </SubTitle>
        <Description>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    

`

const Background =styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
       
    }
`

const ImageTitle = styled.div`
    height:30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    margin-top:60px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const Controls = styled.div`
    display:flex;
    align-items:center;
    
`

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing:1.8px; 
    cursor:pointer;  
    &:hover{
        background:rgb(198,198,198);
    }

`
const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
`

const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`
const Description = styled.div`
    max-width:760px;
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);

`