import Link from "next/link"

export default async function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href="/dashboard/therapist-list">Therapist List</Link>
    </div>
  );
}