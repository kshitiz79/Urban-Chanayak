'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch('http://localhost:5001/api/jobs');
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    if (!confirm('Are you sure you want to delete this job?')) return;

    const res = await fetch(`http://localhost:5001/api/jobs/admin/delete/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchJobs(); // refresh list
    } else {
      alert('Failed to delete job.');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">All Job Listings</h1>
        <Link href="/admin-panel/jobs/add">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Add Job</button>
        </Link>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white shadow p-4 rounded flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>{job.description}</p>
            </div>
            <button
              onClick={() => deleteJob(job._id)}
              className="bg-red-600 text-white px-4 py-1 h-fit rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}