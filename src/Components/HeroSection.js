import React,{ useContext } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { useGlobalContext } from '../Context';


const HeroSection = (props) => {

    const firstName = useGlobalContext();
    return <Wrapper>
        <div className="container grid grid-two column">
            <div className="Section-hero-data>"></div>
            <p className='hero-top-data'>This is Prasad</p>
            <h1 className='hero-heading'>{props.name}</h1>
            <div className="Section-hero-image"></div>
            <picture>
                <img src={props.image}
                    alt="hero-image"
                    className="hero-img"></img>
            </picture>

            <p className='hero-para'>
                I am Prasad,Working for the AFOUR Technologies,Learning Reactjs for now, Want to become a full stack
                developer.

            </p>
            <Button className='btn hireme-btn'>
                <NavLink to="/contact">Portfolio</NavLink>


            </Button>

        </div>


    </Wrapper>

};

const Wrapper = styled.section`
padding:9rem 0;

.Section-hero-data {
display: flex;
flex-direction: column;
justify-content: center;
}
.btn{

    max-width: 40rem;
    
}

.hero-top-data {
    text-trasnform-uppercase;
    margin-top: -12rem;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
}
.hero-heading {
    text-transform: uppercase;
    font-size: 3.5rem;
    margin-top: -10rem;
}

.hero-para {
    margin-top: -10rem;
    margin-bottom: 3.4rem;
    max-width: 100%;
    font-size: 2.5rem;
}
.Section-hero-image {
    display: flex;
    justify-content:center;

    width: 300px;
    height: 100px;
}
picture {
 text-align: center;
 padding: 20rem;
 width: 20px;
 height:10px;
 }
.hero-img {
    width: 110rem;
    height: 50rem;
    margin-top: -45rem;
    margin-left: -15rem;
    
}

`;

export default HeroSection;