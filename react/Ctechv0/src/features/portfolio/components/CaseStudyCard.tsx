import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import type { CaseStudy } from '@/features/portfolio/types';


interface CaseStudyCardProps {
  study: CaseStudy;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <motion.article
      className="rounded-xl border border-brand-black bg-brand-black shadow-sm transition-shadow hover:shadow-md"
      variants={cardVariants}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-brand-yellow/70">
          <span className="rounded-full bg-brand-yellow px-2.5 py-0.5 text-xs font-medium text-brand-black">
            {study.service}
          </span>
          <span>{study.industry}</span>
        </div>

        <h3 className="mt-3 text-xl font-semibold text-brand-yellow">
          {study.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-brand-yellow/80">
          {study.client}
        </p>

        <p className="mt-3 text-brand-yellow/70">{study.summary}</p>

        <Link
          to={`/portfolio/${study.id}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow hover:text-yellow-300"
        >
          Read case study <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
