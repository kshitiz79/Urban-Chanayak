'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplications: 0,
    totalMessages: 0,
    recentActivity: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Fetch all data with individual error handling
        const fetchWithFallback = async (url, fallback = []) => {
          try {
            const response = await fetch(url);
            if (response.ok) {
              return await response.json();
            }
            return fallback;
          } catch (err) {
            console.warn(`Failed to fetch from ${url}:`, err);
            return fallback;
          }
        };

        const [jobs, applications, messages, blogs] = await Promise.all([
          fetchWithFallback('http://localhost:5001/api/jobs'),
          fetchWithFallback('http://localhost:5001/api/applications'),
          fetchWithFallback('http://localhost:5001/api/messages'),
          fetchWithFallback('http://localhost:5001/api/blogs')
        ]);
        
        // Calculate additional stats
        const recentJobs = Array.isArray(jobs) ? jobs.slice(0, 3) : [];
        const recentApplications = Array.isArray(applications) ? applications.slice(0, 3) : [];
        const recentMessages = Array.isArray(messages) ? messages.slice(0, 3) : [];
        
        setStats({
          totalJobs: Array.isArray(jobs) ? jobs.length : 0,
          totalApplications: Array.isArray(applications) ? applications.length : 0,
          totalMessages: Array.isArray(messages) ? messages.length : 0,
          totalBlogs: Array.isArray(blogs) ? blogs.length : 0,
          recentJobs,
          recentApplications,
          recentMessages,
          recentActivity: [
            ...recentJobs.map(job => ({
              type: 'job',
              message: `New job posted: ${job.title}`,
              time: job.createdAt || new Date().toISOString(),
              color: 'blue'
            })),
            ...recentApplications.map(app => ({
              type: 'application',
              message: `New application received for ${app.jobTitle || 'a position'}`,
              time: app.createdAt || new Date().toISOString(),
              color: 'green'
            })),
            ...recentMessages.map(msg => ({
              type: 'message',
              message: `New message from ${msg.name || 'user'}`,
              time: msg.createdAt || new Date().toISOString(),
              color: 'purple'
            }))
          ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 5)
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setError('Failed to load dashboard data. Please check if the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600 text-lg">
            Welcome back! Here's what's happening with your platform today.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Total Jobs</p>
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 rounded w-16 mt-1"></div>
                  </div>
                ) : (
                  <div>
                    <p className="text-3xl font-bold text-slate-800">{stats.totalJobs}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {stats.totalJobs === 0 ? 'No jobs posted yet' : 'Active job postings'}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Applications</p>
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 rounded w-16 mt-1"></div>
                  </div>
                ) : (
                  <div>
                    <p className="text-3xl font-bold text-slate-800">{stats.totalApplications}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {stats.totalApplications === 0 ? 'No applications yet' : 'Candidate applications'}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Messages</p>
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 rounded w-16 mt-1"></div>
                  </div>
                ) : (
                  <div>
                    <p className="text-3xl font-bold text-slate-800">{stats.totalMessages}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {stats.totalMessages === 0 ? 'No messages yet' : 'User messages'}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Blog Posts</p>
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 rounded w-16 mt-1"></div>
                  </div>
                ) : (
                  <div>
                    <p className="text-3xl font-bold text-slate-800">{stats.totalBlogs}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {stats.totalBlogs === 0 ? 'No blog posts yet' : 'Published content'}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Management Cards */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Quick Actions</h2>

            <Link
              href="/admin-panel/jobs"
              className="group block p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-slate-800">Manage Jobs</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {stats.totalJobs}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">Create, edit, and delete job postings</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/admin-panel/applications"
              className="group block p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-green-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-slate-800">Review Applications</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {stats.totalApplications}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">View and manage candidate applications</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/admin-panel/Messages"
              className="group block p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-purple-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-slate-800">View Messages</h3>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                        {stats.totalMessages}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">Check messages from candidates and users</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/admin-panel/blogs"
              className="group block p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-slate-800">Manage Blogs</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                        {stats.totalBlogs}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">Create and manage blog posts</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Recent Activity Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">Recent Activity</h2>
              <button 
                onClick={() => window.location.reload()} 
                className="text-slate-500 hover:text-slate-700 p-1 rounded"
                title="Refresh data"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="animate-pulse flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      <div className="h-4 bg-slate-300 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : stats.recentActivity.length > 0 ? (
                stats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.color === 'blue' ? 'bg-blue-500' :
                      activity.color === 'green' ? 'bg-green-500' :
                      activity.color === 'purple' ? 'bg-purple-500' : 'bg-slate-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-700 text-sm font-medium">{activity.message}</p>
                      <p className="text-slate-500 text-xs mt-1">
                        {new Date(activity.time).toLocaleDateString()} at {new Date(activity.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-slate-500 text-sm mb-2">No recent activity</p>
                  <p className="text-slate-400 text-xs">Activity will appear here as you manage jobs, applications, and messages</p>
                </div>
              )}
            </div>

            {/* Quick Stats Summary */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalJobs}</p>
                  <p className="text-xs text-slate-500">Jobs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{stats.totalApplications}</p>
                  <p className="text-xs text-slate-500">Applications</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">{stats.totalMessages}</p>
                  <p className="text-xs text-slate-500">Messages</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-600">{stats.totalBlogs}</p>
                  <p className="text-xs text-slate-500">Blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
