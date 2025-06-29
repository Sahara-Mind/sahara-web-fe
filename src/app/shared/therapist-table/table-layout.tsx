"use client";
import React from "react";
import PageHeader, { PageHeaderTypes } from "@/app/shared/page-header";

type TableLayoutProps = {
  data: unknown[];
  header: string;
  fileName: string;
} & PageHeaderTypes;

export default function TableLayout({
  data,
  header,
  fileName,
  children,
  ...props
}: React.PropsWithChildren<TableLayoutProps>) {
  return (
    <React.Fragment>
      <PageHeader {...props}></PageHeader>

      {children}
    </React.Fragment>
  );
}
