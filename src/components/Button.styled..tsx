import styled from 'styled-components';
import { MyAnimation } from '../styles/animations/animations';
import { css } from 'styled-components';

type StyledBtnPropsType = {
   fontSize?: string;
   // вопросительній знак ставится если аттрибут опциональній(т.е.может быть, а может отсутствовать)
   color?: string;
   btnType?: 'primary' | 'outlined';
   active?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
   border: none;
   padding: 10px 20px;
   border-radius: 5px;
   font-size: ${(props) => props.fontSize || '2rem'};

   ${(props) =>
      props.btnType === 'outlined' &&
      css<StyledBtnPropsType>`
         border: 2px solid ${(props) => props.color || '#981091'};
         color: ${(props) => props.color || '#981091'};
         background-color: transparent;

         &:hover {
            border-color: blue;
            color: blue;
         }
      `}

   ${(props) =>
      props.btnType === 'primary' &&
      css<StyledBtnPropsType>`
         background-color: ${(props) => props.color || '#981091'};
         color: snow;
         &:hover {
            color: blue;
         }
      `}

      
   ${(props) =>
      props.active &&
      css<StyledBtnPropsType>`
         box-shadow: 5px 5px 5px 5px grey;
      `}
`;
