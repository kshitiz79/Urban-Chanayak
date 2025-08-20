// Enhanced Applications Page UI with Tailwind CSS
'use client';

import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/config/baseUrl';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.APPLICATIONS);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched applications:", data);
      setApplications(data);
    } catch (err) {
      console.error("Fetch error in frontend:", err);
    }
  };

  const deleteApplication = async (id) => {
    if (!confirm('Are you sure you want to delete this application?')) return;

    try {
      const res = await fetch(API_ENDPOINTS.APPLICATION(id), {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchApplications();
      } else {
        const error = await res.json();
        throw new Error(error.message || 'Failed to delete application');
      }
    } catch (err) {
      console.error('Delete error:', err);
      alert(err.message || 'Failed to delete application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Job Applications</h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Email</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Phone</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Job</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Resume</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Portfolio</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((app) => (
              <tr key={app._id}>
              <td className="px-4 py-3 text-sm text-gray-800">{app.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{app.email}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{app.phone}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{app.job?.title || '—'}</td>
              <td className="px-4 py-3 text-sm">
              {app.resume ? (
                <a
                  href={`${API_ENDPOINTS.UPLOADS}/${app.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              ) : (
                '—'
              )}
              </td>
              <td className="px-4 py-3 text-sm">
                {app.portfolio ? (
                <a
                  href={`${API_ENDPOINTS.UPLOADS}/${app.portfolio}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:underline"
                >
                  View
                </a>
              ) : (
                '—'
              )}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => deleteApplication(app._id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
            
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500 text-sm">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}