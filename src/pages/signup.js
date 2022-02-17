import Header from '../components/header';
import Footer from '../components/footer';
import SignupForm from '../components/signup-form';
import Breadcrumbs from '../components/breadcrumbs';

const SignUpPage = {
  async render() {
    return /* html */`
    <div class="container mx-auto p-5 font-montserrat">
    ${await Header.render()}
    ${Breadcrumbs.render('Signup')}
    ${SignupForm.render()}
    ${Footer.render()}
    </div>
    `;
  },
  afterRender() {
    SignupForm.afterRender();
  },
};
export default SignUpPage;
