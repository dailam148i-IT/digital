export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  relatedProductSlug: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "kiem-tra-source-truoc-khi-mua",
    title: "Checklist kiểm tra source trước khi mua",
    excerpt: "Những điểm cần soi kỹ: demo, dependency, license, hướng dẫn cài đặt và phạm vi hỗ trợ.",
    category: "Mua source",
    publishedAt: "2026-05-18",
    readingMinutes: 6,
    relatedProductSlug: "starter-audit-playbook",
    body: [
      "Một source tốt phải có demo chạy được, hướng dẫn cài đặt rõ, danh sách dependency và policy update cụ thể.",
      "Không nên mua source chỉ vì screenshot đẹp. Hãy kiểm tra trạng thái lỗi, responsive, accessibility, quyền dùng thương mại và cách nhận hỗ trợ sau mua.",
      "D13S dùng mock checklist trong MVP để mô phỏng quy trình kiểm duyệt. Khi sản phẩm thật được đưa vào catalog, checklist này phải được thay bằng evidence thực tế.",
    ],
  },
  {
    slug: "ban-san-pham-so-can-chinh-sach-gi",
    title: "Bán sản phẩm số cần chính sách gì",
    excerpt: "License, refund, replacement, support và delivery policy là phần chống tranh chấp quan trọng nhất.",
    category: "Vận hành",
    publishedAt: "2026-05-17",
    readingMinutes: 5,
    relatedProductSlug: "digital-delivery-bundle",
    body: [
      "Sản phẩm số không có kho vật lý nhưng lại có rủi ro tranh chấp cao. Khách cần biết họ được dùng source cho mấy dự án, được update bao lâu và lỗi nào được hỗ trợ.",
      "MVP của D13S dùng chính sách thay thế lỗi thay vì hoàn tiền tùy ý sau khi tải file. Chính sách này phải được pháp lý hoặc chủ dự án duyệt trước khi checkout thật.",
      "Luồng tải file phải dựa trên entitlement, không dựa trực tiếp trên payment record.",
    ],
  },
  {
    slug: "vps-docker-cho-nextjs-commerce",
    title: "VPS Docker cho Next.js commerce",
    excerpt: "Cách nhìn production: image versioned, reverse proxy, healthcheck, backup và rollback.",
    category: "Deploy",
    publishedAt: "2026-05-16",
    readingMinutes: 7,
    relatedProductSlug: "commerce-starter-nextjs",
    body: [
      "VPS Docker cho phép kiểm soát môi trường nhưng yêu cầu kỷ luật vận hành: không để secret trong repo, có healthcheck, log rotation và rollback image.",
      "Mỗi release phải có deploy smoke: mở home, catalog, account, checkout sandbox, webhook, license và signed download.",
      "Nếu production dùng Supabase managed, backup logic vẫn cần được ghi rõ trong runbook.",
    ],
  },
  {
    slug: "ui-catalog-san-pham-so",
    title: "UI catalog sản phẩm số nên hiển thị gì",
    excerpt: "Người mua source cần demo, stack, giá, license, support và update policy trước khi bấm mua.",
    category: "Frontend",
    publishedAt: "2026-05-15",
    readingMinutes: 4,
    relatedProductSlug: "landing-conversion-pack",
    body: [
      "Catalog sản phẩm số không nên chỉ là card đẹp. Card phải đủ thông tin để khách quyết định có mở detail hay không.",
      "Trang chi tiết cần có demo URL, requirements, deliverables, changelog và license summary. Đây là nội dung tạo niềm tin hơn các câu quảng cáo chung chung.",
      "D13S dùng icon từ lucide-react, không dùng emoji làm icon để giữ UI nhất quán và chuyên nghiệp.",
    ],
  },
];

export function getPosts() {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
