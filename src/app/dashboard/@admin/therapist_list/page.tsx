import { routes } from '@/config/routes';
import { orderData } from '@/data/order-data';
import TableLayout from '@/app/dashboard/@admin/therapist_list/table-layout';
import { metaObject } from '@/config/site.config';
import RetroTable from '@/app/shared/tables/basic/retro';

export const metadata = {
  ...metaObject('Table with search'),
};

const pageHeader = {
  title: 'Therapist List',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Therapists',
    },
  ],
};

export default function SearchTablePage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={orderData}
      fileName="order_data"
      header="ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
    >
      <RetroTable tableHeader={true} searchAble={true} pagination={true} />
    </TableLayout>
  );
}
