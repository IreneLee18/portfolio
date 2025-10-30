import { Divider } from '@/components/customs/divider';
import { PageLayout } from '@/components/customs/pageLayout';
import { paths } from '@/constants/paths';
import { Button, buttonVariants } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

const Title = ({
  icon,
  title,
  link,
}: {
  icon: string;
  title: string;
  link?: string;
}) => {
  return (
    <h2 className="lg:text-2xl md:text-xl text-lg font-semibold flex items-center gap-2">
      <span>{icon}</span>
      <span>{title}</span>
      {link && (
        <Link
          to={link}
          className={buttonVariants({ variant: 'iconGhost', size: 'icon' })}
          style={{
            borderRadius: '50%',
          }}
        >
          <ExternalLink />
        </Link>
      )}
    </h2>
  );
};

export default function AboutPage() {
  return (
    <PageLayout title="About" className="flex flex-col gap-5.5">
      <section className="space-y-2">
        <Title icon="👋" title="Hi, I'm Irene Lee" />
        <div className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I’m a frontend developer who enjoys turning ideas into intuitive,
            well-crafted digital products.
          </p>
          <p>
            With over two years of experience in web application development, I
            focus on building scalable and high-performing interfaces using
            React, Next.js, and TypeScript.
          </p>
          <p>
            I care deeply about performance, accessibility, and the little
            details that make a product feel effortless to use.
          </p>
          <p>
            My recent work includes optimising application performance,
            streamlining workflows, and implementing Progressive Web App (PWA)
            features to enhance user engagement.
          </p>
        </div>
      </section>

      <Divider />

      <section className="space-y-2">
        <Title icon="🤝" title="How I Work" />
        <div className="text-gray-700 space-y-2 dark:text-gray-300 leading-relaxed">
          <p>
            I love collaborating with designers, backend developers, and
            stakeholders to bring ideas to life through clear communication and
            shared goals.
          </p>
          <p>
            To me, great development is about more than just code — it’s about
            solving real problems and making every interaction feel seamless and
            meaningful.
          </p>
        </div>
      </section>

      <Divider />

      <section className="space-y-4">
        <Title icon="💬" title="Let's Connect" link={paths.contact.url} />
        <div className="text-gray-700 space-y-2 dark:text-gray-300 leading-relaxed">
          <p>
            Whether it’s about collaboration, frontend development, or creative
            projects, feel free to reach out.
          </p>
          <p>
            I'm always open to interesting conversations and new connections! ✨
          </p>
        </div>
      </section>
      <Divider />
      {/* // TODO: add resume link */}
      <Button variant="ghost" className="w-fit">
        <Download />
        Download Irene's Resume
      </Button>
    </PageLayout>
  );
}
