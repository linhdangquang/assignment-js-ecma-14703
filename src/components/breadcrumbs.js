const Breadcrumbs = {
  render(location = '') {
    return /* html */`
    <div class="text-sm breadcrumbs">
      <ul>
        <li>
          <a href="/">Home</a>
        </li> 
        <li>${location}</li>
      </ul>
    </div>
    `;
  },
};

export default Breadcrumbs;
