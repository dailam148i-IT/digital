import type { Metadata } from "next";
import { ReceiptText } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";
import { formatDate, formatVnd } from "@/lib/format";
import { getProductBySlug } from "@/modules/catalog/queries";
import { mockOrders } from "@/modules/commerce/mock";

export const metadata: Metadata = {
  title: "Đơn hàng",
};

export default function OrdersPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Orders mock</p>
          <h1>Lịch sử đơn hàng</h1>
          <p>Order state trong production chỉ được đổi bởi server event và webhook đã verify.</p>
        </section>

        <section className="content-section table-section">
          <table>
            <thead>
              <tr>
                <th>Đơn hàng</th>
                <th>Sản phẩm</th>
                <th>Ngày</th>
                <th>Trạng thái</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => {
                const product = getProductBySlug(order.productSlug);

                return (
                  <tr key={order.id}>
                    <td>
                      <span className="table-id">
                        <ReceiptText size={15} aria-hidden="true" />
                        {order.id}
                      </span>
                    </td>
                    <td>
                      {product ? <Link href={`/products/${product.slug}`}>{product.title}</Link> : "Unknown"}
                    </td>
                    <td>{formatDate(order.createdAt)}</td>
                    <td>{order.state}</td>
                    <td>{formatVnd(order.totalVnd)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </PageShell>
  );
}
