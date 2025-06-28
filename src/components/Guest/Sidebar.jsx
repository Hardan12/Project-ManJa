<div id="sidebar" className="flex min-h-screen w-72 flex-col bg-white p-8 shadow-lg">
  {/* Logo */}
  <div id="sidebar-logo" className="flex flex-col cursor-pointer mb-10">
    <span className="font-poppins font-extrabold text-4xl text-gray-900">
      ManJa <span className="text-green-500">.</span>
    </span>
    <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
  </div>

  {/* Menu */}
  <ListMenu />

  {/* Footer */}
  <div id="sidebar-footer" className="mt-auto">
    <div className="bg-green-500 px-4 py-3 rounded-md shadow-lg mb-6 flex items-center space-x-4">
      <div className="text-white text-sm flex-grow">
        <p>Please organize your menus through button below!</p>
        <button className="mt-3 bg-white text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 shadow">
          Add Menus
        </button>
      </div>
      <img
        className="w-16 h-16 rounded-full"
        src="https://avatar.iran.liara.run/public/28"
        alt="Admin"
      />
    </div>

    <div className="mb-4 text-gray-600 text-sm">
      <p className="font-bold text-gray-700 mb-1">Kontak</p>
      <p>Email: sedap@email.com</p>
      <p>Telepon: 0821-1234-5678</p>
    </div>

    <div className="flex space-x-4 text-gray-500 mb-6 text-xl">
      <AiOutlineFacebook className="cursor-pointer hover:text-blue-600" />
      <AiOutlineInstagram className="cursor-pointer hover:text-pink-500" />
      <AiOutlineWhatsApp className="cursor-pointer hover:text-green-400" />
    </div>

    <span className="font-bold text-gray-400 block mb-1">Sedap Restaurant Admin Dashboard</span>
    <p className="font-light text-gray-400 text-xs">&copy; 2025 All Rights Reserved</p>
  </div>
</div>
