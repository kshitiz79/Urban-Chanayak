
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddJobPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/jobs/admin/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      router.push('/admin/jobs');
    } else {
      alert('Failed to create job.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 text-black">
      <h1 className="text-3xl font-bold mb-6">Add New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Job Title"
          className="w-full border px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          className="w-full border px-4 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Job
        </button>
      </form>
    </div>
  );
}
