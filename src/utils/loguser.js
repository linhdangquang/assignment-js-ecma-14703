const NotExist = /* html */`
<a href="/#/login"
class="bg-cyan-600 text-gray-50 hover:bg-cyan-700 py-2 mr-2 px-5 rounded-full transition-colors">Login</a>
`;
const Exist = /* html */` 
<div id="user-dropdown" class="dropdown dropdown-end">
  <div tabindex="0" class="rounded-full w-10 h-10 cursor-pointer bg-gray-300 hover:bg-gray-400 transition-colors flex items-center justify-center"><p id="user-first-letter" class="font-bold uppercase">OK</p></div> 
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40 text-sm text-left ">
    <li class="border-b-2 font-semibold text-left">
        <p id="user-name" class="first-letter:uppercase font-bold uppercase py-1">Dang Quang Linh</p>
        <small id="user-email" class="py-1">linhdq@gmail.com</small>
    </li>
    <li id="dashboard-link">
    </li> 
    <li>
        <a>Settings</a>
    </li>
    <li>
        <a id="logout">Sign out</a>
    </li> 
  </ul>
</div>`;

export { NotExist, Exist };
