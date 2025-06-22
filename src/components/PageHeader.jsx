export default function PageHeader({ title, breadcrumb = [], children }) {
  return (
    <div className="px-6 py-4 bg-[#f6f2df] text-[#d2694f] shadow-sm">
      {/* Breadcrumb */}
      <nav className="text-sm mb-2">
        <ol className="flex items-center space-x-2">
          {breadcrumb.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              <span className={index === breadcrumb.length - 1 ? "font-semibold" : "text-gray-500"}>
                {item}
              </span>
            </li>
          ))}
        </ol>
      </nav>

      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
