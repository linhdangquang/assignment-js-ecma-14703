import NavAdmin from './components/navD';
import HeaderAdmin from './components/headerD';
import FooterAdmin from './components/footerD';

const Dashboard = {
  render() {
    return /* html */`
        <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
            ${NavAdmin.render()}
            <div class="ml-4 rounded-l-2xl relative bg-white w-full">
                ${HeaderAdmin.render('Dashboard')}
                <div class="px-7 py-5"><h1>CONTENT</h1></div>
                ${FooterAdmin.render()}
            </div>
        </div>
    `;
  },
};

export default Dashboard;
