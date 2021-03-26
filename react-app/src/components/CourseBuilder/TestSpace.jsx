import React from 'react';

const TestSpace = () => {
    return (
<div className="flex w-full h-screen pt-20 overflow-hidden select-none">
  <nav className="flex flex-col items-center w-24 py-4 bg-white dark:bg-gray-800">
    {/* Left side NavBar */}
    <div>
      {/* App Logo */}
      <svg className="w-8 h-8 text-blue-600 fill-current dark:text-blue-300" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z" />
      </svg>
    </div>
    <ul className="mt-2 text-gray-700 capitalize dark:text-gray-400">
      {/* Links */}
      <li className="p-2 mt-3 text-blue-600 rounded-lg dark:text-blue-300">
        <a href="teacher-dashboard/" className="flex flex-col items-center ">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z" />
          </svg>
          <span className="mt-2 text-xs">dashBoard</span>
        </a>
      </li>
      <li className="p-2 mt-3 rounded-lg hover:text-blue-600 dark-hover:text-blue-300">
        <a href="inbox/" className="flex flex-col items-center ">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23 3v-.5a2.5 2.5 0 00-5 0V3c-.55 0-1 .45-1 1v4c0
							.55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1
							0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V3M6
							11h9v2H6v-2m0-4h9v2H6V7m16 4v5c0 1.11-.89 2-2 2H6l-4
							4V4a2 2 0 012-2h11v2H4v13.17L5.17 16H20v-5h2z" />
          </svg>
          <span className="mt-2 text-xs">messages</span>
        </a>
      </li>
      <li className="p-2 mt-3 rounded-lg hover:text-blue-600 dark-hover:text-blue-300">
        <a href="expenses-dashboard/" className="flex flex-col items-center ">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0
							012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002
							2m0-2h10V8H12m4 5.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0
							011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z" />
          </svg>
          <span className="mt-2 text-xs">earnings</span>
        </a>
      </li>
      <li className="p-2 mt-3 rounded-lg hover:text-blue-600 dark-hover:text-blue-300">
        <a href="users-dashboard/" className="flex flex-col items-center ">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
            <path d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208
							208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7
							17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128
							57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
          <span className="mt-2 text-xs">jobs</span>
        </a>
      </li>
      <li className="p-2 mt-3 rounded-lg hover:text-blue-600 dark-hover:text-blue-300">
        <a href="meetup/" className="flex flex-col items-center ">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m-2.47
							8.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59
							17l5.94-5.94z" />
          </svg>
          <span className="mt-2 text-xs">schedule</span>
        </a>
      </li>
      <li className="p-2 mt-3 rounded-lg hover:text-blue-600">
        <a href="social-media-dashboard/" className="flex flex-col items-center ">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0
							001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <span className="mt-2 text-xs">lesson</span>
        </a>
      </li>
    </ul>
    <div className="flex items-center p-2 mt-auto text-blue-700 bg-purple-200 rounded-full dark:text-blue-500">
      {/* important action */}
      <a href="/">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z" />
        </svg>
      </a>
    </div>
  </nav>
  <main className="flex-1 px-10 pt-2 pb-2 my-1 overflow-y-auto transition duration-500 ease-in-out bg-gray-200 rounded-l-lg dark:bg-black">
    <div className="flex flex-col text-3xl capitalize">
      <span className="font-semibold">hello,</span>
      <span>tempest!</span>
    </div>
    <div className="flex">
      <div className="flex flex-col flex-shrink-0 w-1/2 py-2 mt-8 mr-6 bg-white rounded-lg dark:bg-gray-600">
        {/* Card list container */}
        <h3 className="flex items-center px-8 pt-1 pb-1 text-lg font-semibold capitalize dark:text-gray-300">
          {/* Header */}
          <span>nearby jobs</span>
          <button className="ml-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 256 512">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </button>
        </h3>
        <div>
          {/* List */}
          <ul className="px-3 pt-1 pb-2 overflow-y-auto">
            <li className="mt-2">
              <a className="flex flex-col justify-between p-5 bg-gray-100 rounded-lg dark:bg-gray-200" href="/">
                <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-700">
                  {/* Top section */}
                  <span>english lesson</span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-600 fill-current" viewBox="0 0 24 24">
                      <path d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z" />
                    </svg>
                    <span>4.2 mi</span>
                  </div>
                </div>
                <p className="my-3 text-sm font-medium leading-snug text-gray-600">
                  {/* Middle section */}
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Explicabo assumenda porro
                  sapiente, cum nobis tempore delectus
                  consectetur ullam reprehenderit quis ducimus,
                  iusto dolor nam corporis id perspiciatis
                  consequuntur saepe excepturi.
                </p>
                <div className="flex justify-between">
                  {/* Bottom section */}
                  <div className="flex">
                    <img className="w-6 h-6 mr-3 rounded-full" src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg" alt />
                    <span>
                      <span className="font-semibold text-blue-500">
                        Regina C.
                      </span>
                      via HeyTutor
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-gray-600">
                    14 hours ago
                  </p>
                </div>
              </a>
            </li>
            <li className="mt-2">
              <a className="flex flex-col justify-between p-5 bg-gray-100 rounded-lg dark:bg-gray-200" href="/">
                <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-700">
                  {/* Top section */}
                  <span>english lesson</span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-600 fill-current" viewBox="0 0 24 24">
                      <path d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z" />
                    </svg>
                    <span>4.2 mi</span>
                  </div>
                </div>
                <p className="my-3 text-sm font-medium leading-snug text-gray-600">
                  {/* Middle section */}
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Explicabo assumenda porro
                  sapiente, cum nobis tempore delectus
                  consectetur ullam reprehenderit quis ducimus,
                  iusto dolor nam corporis id perspiciatis
                  consequuntur saepe excepturi.
                </p>
                <div className="flex justify-between">
                  {/* Bottom section */}
                  <div className="flex">
                    <img className="w-6 h-6 mr-3 rounded-full" src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg" alt="Issue" />
                    <span>
                      <span className="font-semibold text-blue-500">
                        Regina C.
                      </span>
                      via HeyTutor
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-gray-600">
                    14 hours ago
                  </p>
                </div>
              </a>
            </li>
          </ul>
          <a href="/" className="flex justify-center text-blue-500 capitalize dark:text-blue-200">
            <span>see all</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-shrink-0 w-1/2 py-2 mt-8 mr-6 text-white bg-purple-300 rounded-lg">
        <h3 className="flex items-center px-8 pt-1 pb-1 text-lg font-bold capitalize">
          {/* Header */}
          <span>scheduled lessons</span>
          <button className="ml-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 256 512">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </button>
        </h3>
        <div className="flex flex-col items-center mt-12">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png" alt=" empty schedule" />
          <span className="mt-8 font-bold">Your schedule is empty</span>
          <span className="text-purple-500">
            Make your first appointment
          </span>
          <button className="px-4 py-2 mt-8 bg-purple-800 rounded-lg">
            Find a Job
          </button>
        </div>
      </div>
    </div>
  </main>
  <aside className="flex flex-col w-1/4 px-6 py-4 my-1 mr-1 overflow-y-auto bg-gray-200 rounded-r-lg dark:bg-black dark:text-gray-400">
    {/* Right side NavBar */}
    <div className="flex items-center justify-between">
      {/* Info */}
      <a href="inbox/" className="relative">
        {/* Left side */}
        <span>
          <svg className="w-5 h-5 hover:text-red-600 dark-hover:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </span>
        <div className="absolute bottom-0 left-0 w-2 h-2 mb-6 ml-2">
          <span className="px-2 py-1 text-xs text-white bg-red-600 rounded-full">
            7
          </span>
        </div>
      </a>
      <div className="flex items-center">
        {/* Right side */}
        <img className="object-cover w-10 h-10 rounded-full" src="https://i.pinimg.com/originals/68/e1/e1/68e1e137959d363f172dc3cc50904669.jpg" alt="tempest profile" />
        <button className="ml-1 focus:outline-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 192 512">
            <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72
							72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72
							72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0
							352c0 39.8 32.2 72 72 72s72-32.2
							72-72-32.2-72-72-72-72 32.2-72 72z" />
          </svg>
        </button>
      </div>
    </div>
    <span className="mt-4 text-gray-600">Monthly earnings</span>
    <span className="mt-1 text-3xl font-semibold">$ 1,579.20</span>
    <button className="flex items-center px-3 py-4 mt-8 text-white bg-green-400 rounded-lg shadow focus:outline-none">
      {/* Action */}
      <svg className="w-5 h-5 ml-3 mr-2 fill-current" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>Bill your Students</span>
    </button>
    <div className="flex items-center mt-12">
      {/* Payments */}
      <span>Payments</span>
      <button className="ml-2 focus:outline-none">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 256 512">
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
						0l-22.6-22.6c-9.4-9.4-9.4-24.6
						0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
						103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1
						34z" />
        </svg>
      </button>
    </div>
    <a href="/" className="flex justify-between p-4 mt-8 font-semibold capitalize bg-gray-300 rounded-lg">
      {/* link */}
      <div className="flex">
        <img className="object-cover w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/cX0xwvJKCNIFrl2wIwoYiIURxmZt1y7tF3wJvynqcnQG5tmYdKBLpDDvhXzmVZzrstAEkw=s151" alt="veldora profile" />
        <div className="flex flex-col ml-4">
          <span>veldora</span>
          <span className="text-sm text-gray-600">english</span>
        </div>
      </div>
      <span>$ 25</span>
    </a>
    <a href="/" className="flex justify-between p-4 mt-2 font-semibold capitalize bg-gray-300 rounded-lg">
      {/* link */}
      <div className="flex">
        <img className="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RZ5sKLtFG-Q2xfXlLa5DbFsmF52Gc-C49B4s63CtSxLkzQY&s" alt="accelerator profile" />
        <div className="flex flex-col ml-4">
          <span>accelerator</span>
          <span className="text-sm text-gray-600">english</span>
        </div>
      </div>
      <span>$ 25</span>
    </a>
    <a href="/" className="flex justify-between p-4 mt-2 font-semibold capitalize bg-gray-300 rounded-lg">
      {/* link */}
      <div className="flex">
        <img className="object-cover w-10 h-10 rounded-full" src="data:image/jpeg;base64,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" alt="syndicate profile" />
        <div className="flex flex-col ml-4">
          <span>syndicate</span>
          <span className="text-sm text-gray-600">english</span>
        </div>
      </div>
      <span>$ 25</span>
    </a>
    <div className="flex justify-center mt-4 text-blue-600 capitalize">
      <a href="expenses-dashboard/">see all</a>
    </div>
  </aside>
</div>
    )}

export default TestSpace;
