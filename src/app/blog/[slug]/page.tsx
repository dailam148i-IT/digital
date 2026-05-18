import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";
import { formatDate } from "@/lib/format";
import { getProductBySlug } from "@/modules/catalog/queries";
import { getPostBySlug, getPosts } from "@/modules/content/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post?.title ?? "Không tìm thấy bài viết",
    description: post?.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedProduct = getProductBySlug(post.relatedProductSlug);

  return (
    <PageShell>
      <main>
        <article className="article">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-meta">
            <CalendarDays size={16} aria-hidden="true" />
            {formatDate(post.publishedAt)} · {post.readingMinutes} phút đọc
          </p>
          <p className="hero-text">{post.excerpt}</p>
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        {relatedProduct ? (
          <section className="notice-band">
            <div>
              <h2>Sản phẩm liên quan</h2>
              <p>{relatedProduct.title}</p>
            </div>
            <Link className="primary-action compact" href={`/products/${relatedProduct.slug}`}>
              Xem sản phẩm
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        ) : null}
      </main>
    </PageShell>
  );
}
