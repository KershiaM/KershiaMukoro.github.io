---
title: MDX
sidebar_position: 3
---

import React from 'react';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

-------

OR Basic Highlight:


/* Instead of this: */
<span style="background-color: red">Foo</span>
/* Use this: */
<span style={{backgroundColor: 'red'}}>Foo</span>