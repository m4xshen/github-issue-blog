import Posts from '@/components/Posts';

export default async function Home() {
  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-10">
      <Posts />
    </div>
  );
}
