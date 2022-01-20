import Header from '../components/header';
import Footer from '../components/footer';
import SignupForm from '../components/signup-form';

const SignUpPage = {
  render() {
    return /* html */`
    <div class="container mx-auto p-5 font-montserrat">
    ${Header.render()}
    ${SignupForm.render()}
    ${Footer.render()}
    </div>
    `;
  },
};
export default SignUpPage;
