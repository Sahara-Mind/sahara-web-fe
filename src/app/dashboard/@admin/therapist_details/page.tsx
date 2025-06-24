import { Suspense } from "react";
import ProfileSettingsFormPage from "./forms/profile-settings/page";

// PageHeaderProps type for clarity
type PageHeaderProps = {
  title: string;
  breadcrumb: { href?: string; name: string }[];
};

// PageHeader component definition
function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div>
      <h2>{title}</h2>
      <nav>
        {breadcrumb.map((item, idx) => (
          <span key={idx}>
            {item.href ? <a href={item.href}>{item.name}</a> : item.name}
            {idx < breadcrumb.length - 1 && ' / '}
          </span>
        ))}
      </nav>
    </div>
  );
}

const pageHeaderData = {
  title: 'Therapist Details',
  breadcrumb: [
    {
      href: '/dashboard',
      name: 'Home'
    },
    {
      href: '/dashboard/therapist_list',
      name: 'Therapists'
    },
    {
      name: 'Therapist Detail'
    }
  ]
};

export default function TherapistDetails() {
  return (
    <>
    <Suspense>
      <PageHeader {...pageHeaderData} />
      </Suspense>
      <h1>Details of Therapists</h1>
      <ProfileSettingsFormPage/>
    </>
  );
}