import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import Glow from 'components/atoms/Glow/Glow'
import Text from 'components/atoms/Text/Text'
import Image from 'components/molecules/Image/Image'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const ShowAvatar = keyframes`
   from {
      transform: translate(-50%, -50%) scale(0);
   }
   to {
      transform: translate(-50%, -50%) scale(1);
   }
`

const ShowBackground = keyframes`
   0% {
      transform: scale(0, 0.1);
   }
   50% {
      transform: scale(1, 0.1);
   }
   100% {
      transform: scale(1, 1);
   }
`

const ShowLine = keyframes`
   from {
      transform: translateX(-50%) scaleX(0);
   }
   to {
      transform: translateX(-50%) scaleX(1);
   }
`

const ShowGlow = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const ShowCircle = keyframes`
   from {
      transform: translate(-50%, 50%) scale(0);
   }
   to {
      transform: translate(-50%, 50%) scale(1);
   }
`

const ShowText = keyframes`
   from {
      opacity: 0;
      transform: translateY(-100%);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
`

const Wrapper = styled.article`
   margin-top: 66px;
   position: relative;
   width: 1000px;
   max-width: 100%;
`

const TextWrapper = styled.div`
   overflow: hidden;
`

const StyledText = styled(Text)`
   @media ${({ theme }) => theme.breakpoints.min.mobile} {
      padding: 75px 50px 50px 50px;
   }
   @media ${({ theme }) => theme.breakpoints.max.mobile} {
      padding: 75px 30px 50px 30px;
      font-size: ${({ theme }) => theme.fontSize.s};
   }
   position: relative;
   z-index: 2;
   animation: ${ShowText} 0.75s ${({ theme }) => theme.easing.primary} backwards;
   animation-delay: ${({ delay }) => delay || 0}s;
`

const Avatar = styled(Image)`
   width: 132px;
   height: 132px;
   border-radius: 50%;
   border: 2px solid ${({ theme }) => theme.accentColor};
   box-shadow: ${({ theme }) => theme.shadow.glow};
   position: absolute;
   left: 50%;
   top: 0;
   transform: translate(-50%, -50%);
   z-index: 5;
   animation: ${ShowAvatar} 0.5s ease-out backwards;
   animation-delay: ${({ delay }) => delay || 0}s;
   will-change: transform;
`

const Background = styled(CardWrapper)`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 0;
   will-change: transform;
   transform-origin: top;
   animation: ${ShowBackground} 1.5s ${({ theme }) => theme.easing.primary} backwards;
   animation-delay: ${({ delay }) => delay || 0}s;
`

const Line = styled.div`
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   will-change: transform;
   border-radius: 1px;
   height: 2px;
   z-index: 4;
   background: ${({ theme }) => theme.accentColor};
   max-width: calc(100% - 50px);

   ${({ bottom }) =>
      bottom
         ? css`
              bottom: 0;
              animation: ${ShowLine} 0.5s ease-out backwards;
              width: 200px;
           `
         : css`
              top: 0;
              animation: ${ShowLine} 0.8s ease-out backwards;
              width: 800px;
           `}

   animation-delay: ${({ delay }) => delay || 0}s;
`

const StyledGlow = styled(Glow)`
   animation: ${ShowGlow} 0.8s ${({ delay }) => delay || 0}s linear backwards;
   z-index: 3;
`

const Circle = styled.div`
   position: absolute;
   width: 16px;
   height: 16px;
   border-radius: 50%;
   bottom: 0;
   left: 50%;
   z-index: 3;
   transform: translate(-50%, 50%);
   background: ${({ theme }) => theme.accentColor};
   animation: ${ShowCircle} 0.3s 1.4s ease-out backwards;
   box-shadow: ${({ theme }) => theme.shadow.glow};
   animation-delay: ${({ delay }) => delay || 0}s;
`

const About = ({ avatar, children, ...props }) => (
   <Wrapper {...props}>
      <Avatar
         src={avatar}
         thumbnail={[128]}
         alt="Marcin Kalinowski"
         delay="0.1"
         preloadAnimation="pulse"
      />
      <Line delay="0.3" />
      <StyledGlow delay="0.8" />
      <TextWrapper>
         <StyledText delay="1">{children}</StyledText>
      </TextWrapper>
      <StyledGlow bottom delay="1.7" />
      <Line bottom delay="1.7" />
      <Circle delay="1.6" />
      <Background delay="0.2" />
   </Wrapper>
)

About.propTypes = {
   avatar: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
}

export default About
