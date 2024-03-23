export default function Title({
  title,
  createdAt,
}: {
  title: string;
  createdAt: string;
}) {
  return (
    <div className="grid gap-2">
      <h1 className="text-[1.7rem] font-bold leading-tight">{title}</h1>
      <div className="text-sm text-primary-500">
        {new Date(createdAt).toDateString()}
      </div>
    </div>
  );
}
