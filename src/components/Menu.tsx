import styled from 'styled-components';

export const Menu = styled.div`
   ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;

      li > a {
         color: red;
      }

      li + li {
         margin-left: 15px;
      }
   }
`;
