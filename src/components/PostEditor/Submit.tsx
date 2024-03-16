import { Button } from '@nextui-org/button';
import { useFormStatus } from 'react-dom';

export default function Submit({
  isInvalid,
  actionName,
}: {
  isInvalid: boolean;
  actionName: string;
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
      {actionName}
    </Button>
  );
}
