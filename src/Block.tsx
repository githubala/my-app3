import React, { useState, useEffect } from "react";
import { Content } from './components/Content.styled';
import { ImgStyle } from './components/ImgStyle.styled';
import { Postyle } from './components/Postyle.styled';
import { Title } from './components/Title.styled';

// Define a functional component
const Block = (props:any) => {
  return (
    <Content>
    <div>
        
        <p>{props.fname}, {props.lname}</p>
      <div>
        <Title>{props.title}</Title>
        <ImgStyle>
            <img src={props.image} style={{width:'100%'}}/>
            </ImgStyle>
        <Postyle>{props.content}</Postyle>
      </div>
        </div>
      
    </Content>
  );
};

export default Block;
