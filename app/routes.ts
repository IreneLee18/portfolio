import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  layout('routes/layout.tsx', [
    route('portfolios', 'routes/portfolios.tsx'),
    route('portfolio/id', 'routes/portfolio.tsx'),
    route('about', 'routes/about.tsx'),
    route('contact', 'routes/contact.tsx'),
  ]),
] satisfies RouteConfig;
