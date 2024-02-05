
import React from 'react';

import MDXComponents from '@theme-original/MDXComponents';
import TabItem from '@site/src/components/TabItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  TabItem,
};