import React from 'react';

type StarPropsType = {
   selected: boolean;
};

export function Star(props: StarPropsType) {
   if (props.selected === true) {
      return (
         <span>
            <b>Star</b>{' '}
         </span>
      );
   } else {
      return <span>Star </span>;
   }
}
