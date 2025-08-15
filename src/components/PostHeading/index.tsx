import Link from 'next/link';

type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl extrabold',
    h2: 'text-2xl/tight font-bold ',
  };

  const commonClasses = '';

  return (
    <Tag className={(headingClassesMap[Tag], commonClasses)}>
      <Link className='group-hover:text-shadow-slate-600 transition' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
