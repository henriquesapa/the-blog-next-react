import clsx from 'clsx';

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          'text-xl',
          'font-bold',
          'text-blue-500',
          'hover:text-blue-50',
          'hover:bg-blue-200',
          'transition',
          'duration-300',
        )}
      >
        Texto no meu h1
      </h1>
    </div>
  );
}
