import { posts } from '@/lib/content';
import PostContent from './PostContent';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return {
    title: post ? `${post.title} | Prajawola Adhikari` : 'Insights | Prajawola Adhikari'
  };
}

export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <section className="pb-20">
        <div className="section-shell text-center">
          <p className="text-plum dark:text-white">Post not found.</p>
        </div>
      </section>
    );
  }

  return <PostContent post={post} />;
}
