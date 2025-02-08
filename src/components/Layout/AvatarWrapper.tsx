'use client';

import { useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { logOut, login } from '@/actions/auth';
import { User } from '@/types';
import { GitHub } from '../Icons';

export default function AvatarWrapper({ user }: { user: User | null }) {
  const [isLoading, startTransition] = useTransition();
  const pathname = usePathname();

  if (!user) {
    return (
      <Button
        size="sm"
        radius="sm"
        color="primary"
        isLoading={isLoading}
        className="flex items-center fill-background"
        onPress={() => {
          startTransition(async () => {
            await login(pathname);
          });
        }}
      >
        {isLoading ? null : <GitHub />}
        Login
      </Button>
    );
  }

  return (
    <Dropdown radius="sm" placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          name={user.name ?? undefined}
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
