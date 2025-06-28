import Link from "next/link"
import { routes } from "@/config/routes";

export default async function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href= {routes.therapist.therapistList} >Therapist List</Link>
    </div>
  );
}