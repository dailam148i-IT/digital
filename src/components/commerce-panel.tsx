import { CreditCard, Download, FileCheck2, LifeBuoy, LockKeyhole } from "lucide-react";

export function CommercePanel() {
  const controls = [
    {
      icon: CreditCard,
      title: "Checkout payOS/VietQR",
      text: "MVP đang mock payment. Khi có credentials, webhook sẽ cấp entitlement sau khi amount khớp.",
    },
    {
      icon: LockKeyhole,
      title: "Private delivery",
      text: "File không public. API chỉ cấp signed URL ngắn hạn khi license hợp lệ.",
    },
    {
      icon: Download,
      title: "Account library",
      text: "Khách xem order, version, update window và tải lại sản phẩm đã mua.",
    },
    {
      icon: LifeBuoy,
      title: "Ticket support",
      text: "Hỗ trợ kỹ thuật 30 ngày gắn với order và sản phẩm, tránh thất lạc qua chat rời.",
    },
  ];

  return (
    <div className="control-grid">
      {controls.map((item) => (
        <article className="control-card" key={item.title}>
          <item.icon size={22} aria-hidden="true" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
      <article className="control-card control-card-strong">
        <FileCheck2 size={22} aria-hidden="true" />
        <h3>Mock có kiểm soát</h3>
        <p>Mock data được gắn nhãn, dùng shape giống production và có thể thay bằng dữ liệu thật.</p>
      </article>
    </div>
  );
}
