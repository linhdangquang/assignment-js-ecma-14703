const NotExist = /* html */`
<a href="/#/login"
class="bg-cyan-600 text-gray-50 hover:bg-cyan-700 py-2 mr-2 px-5 rounded-full transition-colors">Login</a>
`;
const Exist = /* html */` 
<div id="user-dropdown" class="dropdown dropdown-end">
  <div tabindex="0" class=""><img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" class="rounded-full w-10 h-10 cursor-pointer"></div> 
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40 text-sm text-left ">
    <li class="border-b-2 p-2 font-semibold text-left">
        <p>Dang Quang Linh</p>
        <small id="user-email">linhdq@gmail.com</small>
    </li>
    <li>
        <a href="/#/admin/dashboard">Dashboard</a>
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
