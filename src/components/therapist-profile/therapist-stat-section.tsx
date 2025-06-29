'use client';

import {
  PiUsersThree,
  PiCurrencyDollar,
  PiClock,
  PiWarningCircle,
  PiMagnifyingGlass,
} from 'react-icons/pi';
import TherapistStatCard from '@/components/therapist-profile/therapist-stat-cards';
import cn from '@/utils/class-names';

import {TherapistDataType} from "@/types"

// Define props for this component to optionally accept a className
interface TherapistStatsSectionProps {
  className?: string;
  therapist: TherapistDataType;
}

export default function TherapistStatsSection({ className, therapist }: TherapistStatsSectionProps) {
  const stats = [
    {
      label: "Total Sessions",
      value: therapist.id === 1 ? 450 : therapist.id === 2 ? 300 : 220,
      icon: <PiClock className="h-10 w-10" />,
    },
    {
      label: "Upcoming Sessions",
      value: therapist.id === 1 ? 12 : therapist.id === 2 ? 8 : 5,
      icon: <PiMagnifyingGlass className="h-10 w-10" />,
    },
    {
      label: "Clients",
      value: therapist.id === 1 ? 120 : therapist.id === 2 ? 80 : 60,
      icon: <PiUsersThree className="h-10 w-10" />,
    },
    {
      label: "Cancellations",
      value: therapist.id === 1 ? 8 : therapist.id === 2 ? 5 : 3,
      icon: <PiWarningCircle className="h-10 w-10" />,
    },
    {
      label: "Missed Sessions",
      value: therapist.id === 1 ? 4 : therapist.id === 2 ? 3 : 2,
      icon: <PiClock className="h-10 w-10" />,
    },
    {
      label: "Refunds",
      value: therapist.id === 1 ? 310 : therapist.id === 2 ? 150 : 100,
      isCurrency: true,
      icon: <PiCurrencyDollar className="h-10 w-10" />,
    },
  ];

  return (
    <div className={cn(className)}>
      <TherapistStatCard stats={stats} />
    </div>
  );
}
