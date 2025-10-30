import { PageLayout } from '@/components/customs/pageLayout';
import { portfolios } from '@/constants/portfolios';
import { Link } from 'react-router';
import { Calendar } from 'lucide-react';

type PortfolioItemProps = {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
};

const PortfolioItem = ({ id, title, date, image, slug }: PortfolioItemProps) => {
  return (
    <Link
      to={`/portfolio/${slug}`}
      className="group grid grid-cols-[1fr_auto] gap-4 md:gap-6 py-6 border-b border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
    >
      {/* Left Side: Title & Date */}
      <div className="flex flex-col justify-center gap-2 min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 shrink-0" />
          <span>{date}</span>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="shrink-0 w-32 h-20 md:w-40 md:h-24 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </Link>
  );
};

export default function PortfoliosPage() {
  const portfolioList = Object.entries(portfolios).map(([slug, portfolio]) => {
    return {
      ...portfolio,
      slug,
    };
  });

  return (
    <PageLayout title="Portfolios" className="flex flex-col">
      <div className="space-y-0">
        {portfolioList.map((portfolio) => {
          return (
            <PortfolioItem
              key={portfolio.id}
              id={portfolio.id}
              title={portfolio.title}
              date={portfolio.date}
              image={portfolio.image}
              slug={portfolio.slug}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}
