import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import getUser from '@/utils/getUser';
import AvatarWrapper from './AvatarWrapper';

export default async function NavbarWrapper() {
  const user = await getUser();

  return (
    <Navbar>
      <NavbarBrand>
        <h1 className="text-2xl font-semibold">Blog</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <AvatarWrapper user={user} />
      </NavbarContent>
    </Navbar>
  );
}
