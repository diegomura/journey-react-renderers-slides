import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 40px;
  display: inline;
  margin-right: 20px;
`;

const Name = styled.h4`
  display: inline;
  font-size: 20px;
`;

const SocialInfo = ({ image, username }) => (
  <Wrapper>
    <Image src={image} />
    <Name>{username}</Name>
  </Wrapper>
);

export default SocialInfo;
