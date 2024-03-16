import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { getUser } from '@/actions/auth';
import AvatarWrapper from './AvatarWrapper';

export default async function NavbarWrapper() {
  const user = await getUser();

  return (
    <Navbar
      classNames={{
        base: 'backdrop-blur-sm border-b border-b-stone-800',
      }}
    >
      <NavbarBrand>
        <Link href="/" className="text-xl font-bold">
          {process.env.BLOG_TITLE}
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <AvatarWrapper user={user} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
