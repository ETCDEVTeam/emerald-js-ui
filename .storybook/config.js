import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Page');
  require('../stories/Input');
  require('../stories/Address');
  require('../stories/icons3');
  require('../stories/ToggledIconButton');
  require('../stories/Buttons');
  require('../stories/PaperList');
  require('../stories/AppBar');
    // You can require as many stories as you need.
}

configure(loadStories, module);
