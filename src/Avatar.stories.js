import React from 'react';

import {Avatar} from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};

export const Initials = (args) => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

export const Loading = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};

export const Large = (args) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

// New story using controls, named Controls
// You can supply multiple values to a component prop through arguments (or args for short)
// and adjust them through the UI
// Controls don’t replace stories. They are great for exploring the edge cases of the components
// eg. we still have story that shows all posible sizes
const Template = (args) => <Avatar {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  loading: false,
  size: 'tiny',
  username: 'Dominic Nguyen',
  src: 'https://avatars2.githubusercontent.com/u/263385',
};
