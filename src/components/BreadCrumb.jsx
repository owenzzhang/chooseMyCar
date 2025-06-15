function Breadcrumb() {
  const crumbs = [
    "Home",
    "Used Cars",
    "Honda",
    "Civic",
    "2.0 i-VTEC Type R GT Euro 6 (s/s) 5dr",
  ];

  return (
    <nav
      className="text-sm text-gray-600 max-w-screen-xl mx-auto my-2 px-4"
      aria-label="breadcrumb"
    >
      <ol className="flex flex-wrap items-center space-x-2">
        <li className="flex items-center md:hidden">
          <a href="#" className="hover:text-blue-600">
            {crumbs[0]}
          </a>
        </li>

        <li className="md:hidden text-gray-400 mx-1">{">"}</li>

        <li className="md:hidden text-gray-400">...</li>

        <li className="md:hidden text-gray-400 mx-1">{">"}</li>

        <li className="flex items-center md:hidden font-semibold text-gray-800">
          {crumbs[crumbs.length - 1]}
        </li>

        {crumbs.map((crumb, index) => (
          <li key={index} className="hidden md:flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">{">"}</span>}
            {index === crumbs.length - 1 ? (
              <span className="font-semibold text-gray-800">{crumb}</span>
            ) : (
              <a href="#" className="hover:text-blue-600">
                {crumb}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
