import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";
import { formatDate } from "@/lib/format";
import { getPosts } from "@/modules/content/posts";

export const metadata: Metadata = {
  title: "Mẹo và tài nguyên",
  description: "D13S resources for buying, auditing, deploying, and selling digital products.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Resources</p>
          <h1>Mẹo, checklist và hướng dẫn cho sản phẩm số</h1>
          <p>
            Nội dung tập trung vào intent mua và vận hành: kiểm tra source, policy, deploy, UI
            catalog và support sau mua.
          </p>
        </section>

        <section className="content-section post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <span className="badge">
                <BookOpen size={14} aria-hidden="true" />
                {post.category}
              </span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <small>
                {formatDate(post.publishedAt)} · {post.readingMinutes} phút đọc
              </small>
              <Link className="icon-link" href={`/blog/${post.slug}`}>
                Đọc bài
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
