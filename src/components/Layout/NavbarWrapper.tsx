import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { getUser } from '@/actions/auth';
import { Link } from '@nextui-org/link';
import AvatarWrapper from './AvatarWrapper';

export default async function NavbarWrapper() {
  const user = await getUser();

  return (
    <Navbar
      classNames={{
        base: 'backdrop-blur-sm border-b border-b-secondary',
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
