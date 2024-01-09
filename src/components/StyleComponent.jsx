import React from 'react';
// import classNames from 'classnames';

// How to apply styles in React?


const StyleComponent = () => {
    const appStyles = {
        background: 'green',
        marginTop: '20px',
    }
  return (
    <div style={appStyles}>StyleComponent</div>
  )
}

// How to add several classes conditionally?

// const StyleComponent = () => {
//     const isActive = true;
//     const appClasses = classNames({
//           foo: true,
//           baz: true,
//           bar: isActive,
//     })
//   return (
//     <div className={appClasses}>StyleComponent</div>
//   )
// }

export default StyleComponent