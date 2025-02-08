import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { getUser } from '@/utils/auth';
import AvatarWrapper from './AvatarWrapper';
import ThemeSwitcher from './ThemeSwitcher';

export default async function NavbarWrapper() {
  const user = await getUser();

  return (
    <Navbar
      classNames={{
        base: 'backdrop-blur-sm border-b border-b-secondary',
      }}
    >
      <NavbarBrand className="gap-5">
        <Link href="/" className="text-xl font-bold">
          {process.env.BLOG_TITLE}
        </Link>
        <ThemeSwitcher />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <AvatarWrapper user={user} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
