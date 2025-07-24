import Link from "next/link";
export default function AdminDashboard() {
    return (
      <div className="p-6 text-black">
        <div className="min-h-screen pt-24 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome back, Admin. Use the tools below to manage jobs and applications efficiently.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/admin-panel/jobs"
            className="block p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-200 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">📄 View All Jobs</h2>
            <p className="text-sm text-gray-500">
              Browse, edit, or delete current job postings. Keep your listings up to date.
            </p>
          </Link>

          <Link
            href="/admin-panel/applications"
            className="block p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-200 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">📝 View Applications</h2>
            <p className="text-sm text-gray-500">
              Review applications submitted by candidates across all job roles.
            </p>
          </Link>
          <Link
            href="/admin-panel/Messages"
            className="block p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-200 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">📝 View All Messages</h2>
            <p className="text-sm text-gray-500">
              Review Messages submitted by candidates across all job roles.
            </p>
          </Link>
        </div>
      </div>
    </div>
       
      </div>
    );
  }
  