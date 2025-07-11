export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-gray-500">
                    <span>{breadcrumb}</span>
                </div>
            </div>
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}
