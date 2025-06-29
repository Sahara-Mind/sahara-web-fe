'use client';

import React from 'react';
import { Text } from 'rizzui';
import { cn } from '@/utils/class-names';

import {StatItem} from "@/types"


interface TherapistStatCardProps {
  stats: StatItem[];
  className?: string;
}

export default function TherapistStatCard({
  stats,
  className,
}: TherapistStatCardProps) {
  return (
    <div className={cn('custom-scrollbar overflow-x-auto scroll-smooth', className)}>
      <div className="mt-8 grid min-w-[1536px] grid-cols-7 gap-5 rounded-lg border border-muted p-8 md:mt-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              {stat.icon}
            </div>
            <div>
              <Text
                fontWeight="medium"
                className="block font-lexend text-base text-gray-900"
              >
                {stat.isCurrency
                  ? `$${Number(stat.value).toLocaleString()}`
                  : stat.value}
              </Text>
              <Text>{stat.label}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
