import React from 'react';

function Add({title, add}) {
  console.log(add);
  return (
    <div>{title} {add}</div>
  );
}
export default Add;
