'use client';

import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { useTransition } from 'react';
import { logOut, login } from '@/actions/auth';
import { usePathname } from 'next/navigation';

export default function AvatarWrapper({ user }: { user: any }) {
  const [isLoading, startTransition] = useTransition();
  const pathname = usePathname();

  if (!user) {
    return (
      <Button
        size="sm"
        radius="sm"
        color="primary"
        isLoading={isLoading}
        onPress={() => {
          startTransition(async () => {
            await login(pathname);
          });
        }}
      >
        Login
      </Button>
    );
  }

  return (
    <Dropdown radius='sm' placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          name={user.name}
          size="sm"
          src={user.avatar_url}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="profile"
          className="h-14 gap-2"
          textValue={`Signed in as ${user.name}`}
        >
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user.name}</p>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onPress={async () => {
            await logOut();
          }}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
