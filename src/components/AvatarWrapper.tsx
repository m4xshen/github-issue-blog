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

export default function AvatarWrapper({ user }: { user: any }) {
  const [isLoading, startTransition] = useTransition();

  if (!user) {
    return (
      <Button
        isLoading={isLoading}
        onPress={() => {
          startTransition(async () => {
            await login();
          });
        }}
      >
        Login
      </Button>
    );
  }

  return (
    <Dropdown placement="bottom-end">
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
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user.name}</p>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onPress={() => {
            logOut();
          }}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
