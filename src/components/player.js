export default class Player {
  constructor(data) {
    this.data = data;
    this.generateDOMElement();
  }

  generateDOMElement() {
    const {name} = this.data;
    this.dom = document.createElement('div');
    this.dom.innerHTML = getDOMStructure({name});
  }

  render(container) {
    container.appendChild(this.dom);
  }
}

function getDOMStructure({name}) {
  return `
    <div>${name}</div>
  `;
}
