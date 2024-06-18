import React from 'react';
import './App.css';
import { log } from 'console';
import Accordion from './components/Accordion';
import { Rating } from './components/Rating';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled.';
import { Link } from './components/Link.styled';
import { Menu } from './components/Menu';
import { myTheme } from './styles/Theme.styled';

function App() {
   console.log('App rendered');

   return (
      <div className='App'>
         <Menu>
            <ul>
               <li>
                  <a href='#'>menu item</a>
               </li>
               <li>
                  <a href='#'>menu item</a>
               </li>
               <li>
                  <a href='#'>menu item</a>
               </li>
            </ul>
         </Menu>

         <Box>
            <StyledBtn
               color={myTheme.colors.primary}
               btnType={'primary'}
               active
               fontSize={'20px'}>
               New link
            </StyledBtn>
            <StyledBtn
               as='a'
               href={'#'}
               fontSize={'40px'}
               color={myTheme.colors.secondary}
               btnType={'outlined'}>
               Link
            </StyledBtn>

            <PageTitle title={'This is APP component'} />
            <PageTitle title={'New title'} />
            <Rating value={3} />
            <Accordion titleValue={'First title'} />
            <Accordion titleValue={'Second title'} />
            <Rating value={4} />
            <Rating value={0} />
            <Rating value={5} />
            <Rating value={1} />
            <StyledBtn btnType={'outlined'}>Hello</StyledBtn>
         </Box>
      </div>
   );
}

type PageTitlePropsType = {
   title: string;
};

function PageTitle(props: PageTitlePropsType) {
   console.log('PageTitle rendering');
   debugger;
   return <h1>{props.title}</h1>;
}

export default App;

const Box = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 20px;

   button {
      cursor: pointer;
   }

   ${Link} {
      cursor: zoom-in;
   }

   @media ${myTheme.media.tablet} {
      gap: 50px;
   }
`;
