import { useFormStatus } from 'react-dom';
import { Button } from "@heroui/button";
import { ReactNode } from 'react';

export default function Submit({
  children,
  isInvalid,
}: {
  children: ReactNode;
  isInvalid: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      radius="sm"
      color="primary"
      className="ml-auto"
      isDisabled={isInvalid}
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
