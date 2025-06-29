import TherapistInfo from '@/components/therapist-profile/therapist-info';
import TherapistStatsSection from '@/components/therapist-profile/therapist-stat-section';
import RecentTherapies from '@/components/therapist-profile/recent-therapies';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { DemoData } from '@/data/demo-data';
import { notFound } from 'next/navigation';


type Props = {
  params: {
    id: string;
  };
};

export default function TherapistDetailsPage({params}: Props) {
  const therapist = DemoData.find(
    (item) => item.id === params.id
  );

  if (!therapist) {
    notFound();
  }


const pageHeader = {
  title: "Therapists List",
  breadcrumb: [
    {
      href: routes.dashboard,
      name: "Dashboard",
    },
    {
      name: therapist.name,
    },
  ],
};

  return (
    <div>
      <PageHeader
        title="Therapist Details"
        breadcrumb={pageHeader.breadcrumb}
      />
      <TherapistInfo therapist={therapist} />
      <TherapistStatsSection className="mb-8" therapist={therapist}/>
      <RecentTherapies  therapist={therapist} />
    </div>
  );
}
