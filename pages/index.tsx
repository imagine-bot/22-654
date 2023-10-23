import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Link href="/button">
        <a>Go to Button Page</a>
      </Link>
    </div>
  );
};

export default HomePage;