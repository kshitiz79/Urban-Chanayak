export default function AdminLayout({ children }) {
    return (
      <div className="flex min-h-screen ">
        <aside className="w-64 bg-gray-800 text-white p-4 pt-10">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav>
            <ul className="space-y-2">
              <li><a href="/admin-panel" className="block py-2 hover:underline">Dashboard</a></li>
              <li><a href="/admin-panel/users" className="block py-2 hover:underline">Users</a></li>
              <li><a href="/admin-panel/jobs" className="block py-2 hover:underline">All Jobs</a></li>
              <li><a href="/admin-panel/applications" className="block py-2 hover:underline">All Applications</a></li>
              <li><a href="/admin-panel/settings" className="block py-2 hover:underline">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>
      </div>
    );
  }
