import Header from '../components/header';
import Footer from '../components/footer';
import SignupForm from '../components/signup-form';
import Breadcrumbs from '../components/breadcrumbs';

const SignUpPage = {
  render() {
    return /* html */`
    <div class="container mx-auto p-5 font-montserrat">
    ${Header.render()}
    ${Breadcrumbs.render('Signup')}
    ${SignupForm.render()}
    ${Footer.render()}
    </div>
    `;
  },
};
export default SignUpPage;
