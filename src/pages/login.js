import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/login-form';

const LoginPage = {
  render() {
    return /* html */`
        <div class="container mx-auto p-5 font-montserrat">
        ${Header.render()}
        ${LoginForm.render()}
        ${Footer.render()}
        </div>
    `;
  },
};

export default LoginPage;
