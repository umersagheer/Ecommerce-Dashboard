"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between ">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage Billboards Here"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 size-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="Api calls for Billboards" />
      <Separator />
      <ApiList entityIdName="billboardId" entityName="billboards" />
    </>
  );
};

export default BillboardClient;
