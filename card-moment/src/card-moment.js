import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardMoment extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    .crd{
  padding: 12px;
  background-color: skyblue;
  border-radius: 12px;
  border: 6px solid black;
  max-width: 300px;
  padding: 12px;
  float: left;
}
.image{
  width: 100%;
}
h1{
  font-size: 30px;
  text-align: center;
}
h2{
  font-size: 18px;
  text-align: center;
}
.buttons{
  margin: 0;
  text-align: center;
  display: none;
  clear: both;
}
p{
  text-align: center;
  display: none;
}
@media (min-width: 500px) and (max-width: 800px) {
  .buttons {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
}
.somethingelse {
  font-size: 18px;
  display: block;
  margin: 0;
}
.somethingelse:hover{
  background-color: orange;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.somethingelse:focus{
  background-color: orange;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.addOne{
  font-size: 18px;
  display: block;
  margin: 0;
}
.addOne:hover{
  background-color: lightseagreen;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.addOne:focus{
  background-color: lightseagreen;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.remove {
  font-size: 18px;
  display: block;
  margin: 0;
}
.remove:hover {
  background-color: green;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.remove:focus{
  background-color: green;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.colorChanger{
  font-size: 18px;
  display: block;
  margin: 0;
}
.colorChanger:hover{
  background: linear-gradient(
    to right,
    red,
    yellow,
    red,
    blue,
    cyan,
    blue,
    violet
  );
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.colorChanger:focus{
  background: linear-gradient(
    to right,
    red,
    yellow,
    red,
    blue,
    cyan,
    blue,
    violet
  );
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
@media (max-width: 500px) {
  .crd {
    transform: scale(0.8);
  }
  .image {
    width: 300px;
  }
  h1 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
};
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="crd">
  <div class="container">
    <div class="header">
      <h1>A Picture of a Sunset</h1>
      <img class="image" src="https://media.cntraveler.com/photos/576834ff90b3537d7c010c05/16:9/w_2560%2Cc_limit/GettyImages-162672165.jpg" alt="A picture"/>
      <div class="subheader">
        <h2>A Picture of a Plane in a Sunset</h2>
      </div>
    </div>
  </div>
  <div class="paragraph">
    <p>This is a picture of a Boeing 787 taking off during sunset.</p>
  </div>
  <div class="buttons">
    <button class="details">Details</button>
  </div>
</div>
<button class="somethingelse">Something Else</button>
<button class="addOne">Add</button>
<button class="remove">Delete One</button>
<button class="colorChanger">Color Changer</button>
    `;
  }
}

customElements.define('card-moment', CardMoment);