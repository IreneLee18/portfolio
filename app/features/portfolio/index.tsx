import { Divider } from '@/components/customs/divider';
import { PageLayout } from '@/components/customs/pageLayout';
import { portfolios } from '@/constants/portfolios';
import { cn } from '@/lib/utils';
import { Github, Calendar, Globe, Wrench } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';
import { paths } from '@/constants/paths';

type InfoItemProps = {
  className?: string;
  icon: React.ReactNode;
  value: string | React.ReactNode;
  href?: string;
};

const InfoItem = ({ className, icon, value, href }: InfoItemProps) => {
  const content = (
    <>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
        <span className="shrink-0">{icon}</span>
        <div>{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group block hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300',
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
};

export default function PortfolioPage() {
  const navigate = useNavigate();
  const params = useParams();
  const portfolio = portfolios[params.id as keyof typeof portfolios];
  const renderTechs = (className: string) => {
    return (
      <InfoItem
        className={className}
        icon={<Wrench className="w-4 h-4" />}
        value={
          <div className="flex flex-wrap gap-2">
            {portfolio.technologies.map((tech) => {
              return (
                <span
                  key={tech}
                  className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        }
      />
    );
  };

  return (
    <PageLayout
      title={portfolio.title}
      className="flex flex-col gap-6 lg:gap-10"
      goBackString="Back to Portfolios"
      goBack={() => navigate(paths.portfolios.url)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col gap-4 lg:gap-8 mb-4 lg:mb-0">
          {/* Image */}
          <div className="w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <InfoItem
              icon={<Globe className="w-4 h-4" />}
              value={<span>Demo</span>}
              href={portfolio.projectLink}
            />

            <InfoItem
              icon={<Github className="w-4 h-4" />}
              value={<span>GitHub Link</span>}
              href={portfolio.githubLink}
            />

            <InfoItem
              icon={<Calendar className="w-4 h-4" />}
              value={<span>{portfolio.date}</span>}
            />

            {renderTechs('lg:hidden')}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          {renderTechs('hidden lg:block')}
          <Divider />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              About This Project
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {portfolio.description}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
