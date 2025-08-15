import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>
            20/04/2025 10:00
          </time>
          <PostHeading as='h1' url='#'>
            Et adipisci optio obcaecati corporis necessitatibus ratione quae
          </PostHeading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illo enim porro numquam cum dicta, veritatis quas minus rerum magnam
            repudiandae esse et adipisci optio obcaecati corporis necessitatibus
            ratione quae.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'> Footer</p>
      </footer>
    </Container>
  );
}
