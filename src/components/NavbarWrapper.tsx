import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import Link from 'next/link';
import { getUser } from '@/actions/auth';
import AvatarWrapper from './AvatarWrapper';

export default async function NavbarWrapper() {
  const user = await getUser();

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold">
          Blog
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <AvatarWrapper user={user} />
      </NavbarContent>
    </Navbar>
  );
}
