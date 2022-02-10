import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/login-form';
import Breadcrumbs from '../components/breadcrumbs';

const LoginPage = {
  render() {
    return /* html */`
        <div class="container mx-auto p-5 font-montserrat">
        ${Header.render()}
        ${Breadcrumbs.render('Login')}
        ${LoginForm.render()}
        ${Footer.render()}
        </div>
    `;
  },
  afterRender() {
    LoginForm.afterRender();
  },
};

export default LoginPage;
