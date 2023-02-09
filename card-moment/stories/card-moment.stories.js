import { html } from 'lit';
import '../src/card-moment.js';

export default {
  title: 'CardMoment',
  component: 'card-moment',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <card-moment
      style="--card-moment-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </card-moment>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
