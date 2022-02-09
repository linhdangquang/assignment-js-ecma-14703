const reRender = async (component, domElement) => {
  document.querySelector(domElement).innerHTML = await component.render();
  if (component.afterRender) component.afterRender();
};
export default reRender;
