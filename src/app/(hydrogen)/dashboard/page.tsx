import {Metadata} from 'next'
import PageHeader from '@/app/shared/page-header'

export const metadata: Metadata = {
    title: "New Page | Isomorphic",
};

const pageHeader = {
    title: "New Page",
    breadcrumb: [
        {
            href: "/",
            name: "Home",
        },
        {
            name: "New Page"
        },
    ],
}
const pageContent = {
    title:"Page Contents"
}

export default function NewPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque consequuntur ipsum aspernatur nemo quia, mollitia ullam eum officiis distinctio voluptatibus voluptas obcaecati deserunt aliquid vel quisquam numquam beatae esse ea ab ad consectetur odit quidem sint. Quos praesentium omnis ipsum, animi, expedita maxime voluptates nihil tempora tenetur, eius facilis.</p>
    </>
  );
}
 