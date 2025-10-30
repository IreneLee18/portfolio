import { PageLayout } from '@/components/customs/pageLayout';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
};

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
    >
      <div className="shrink-0 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-1">
          {label}
        </div>
        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 font-medium group-hover:text-gray-400 dark:group-hover:text-gray-400 transition-colors duration-300">
          {value}
        </div>
      </div>
      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-400 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </Link>
  );
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Linkedin className="w-6 h-6 md:w-7 md:h-7" />,
      label: 'LinkedIn',
      value: 'Irene Lee',
      href: 'https://www.linkedin.com/in/irene-lee-690ab1232',
    },
    {
      icon: <Github className="w-6 h-6 md:w-7 md:h-7" />,
      label: 'GitHub',
      value: 'Irene',
      href: 'https://github.com/IreneLee18',
    },
    {
      icon: <Mail className="w-6 h-6 md:w-7 md:h-7" />,
      label: 'Email',
      value: 'cc86418520@gmail.com',
      href: 'mailto:cc86418520@gmail.com',
    },
  ];

  return (
    <PageLayout title="Contact" className="flex flex-col gap-8 md:gap-10">
      <section className="space-y-4">
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <p className="text-base md:text-lg">
            Feel free to reach out if you'd like to collaborate, discuss
            opportunities, or just have a chat about technology and creativity.
          </p>
          <p className="text-base md:text-lg">
            I'm always open to interesting conversations and new connections! ✨
          </p>
        </div>
      </section>

      <section className="space-y-4 md:space-y-5">
        {contactInfo.map((item) => {
          return (
            <ContactItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              value={item.value}
              href={item.href}
            />
          );
        })}
      </section>
    </PageLayout>
  );
}
