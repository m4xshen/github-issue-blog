export default function Footer() {
  return (
    <footer className="mt-auto flex h-32 flex-col justify-center text-center">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Max Shen. All rights reserved.
      </div>
    </footer>
  );
}
