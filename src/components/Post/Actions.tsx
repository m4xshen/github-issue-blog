'use client';

import { useTransition } from 'react';
import Link from 'next/link';
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { toast } from 'sonner';
import { deletePost } from '@/actions/post';

export default function Actions({ number }: { number: number }) {
  const [isLoading, startTransition] = useTransition();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex items-center gap-5">
      <Button
        as={Link}
        radius="sm"
        color="primary"
        href={`/post/edit/${number}`}
        className="no-underline"
      >
        Edit
      </Button>
      <Button radius="sm" color="primary" onPress={onOpen}>
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-background"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Delete post</ModalHeader>
              <ModalBody>
                Are you sure you want to delete this post? This action cannot be
                undone.
              </ModalBody>
              <ModalFooter>
                <Button
                  radius="sm"
                  color="primary"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  radius="sm"
                  color="danger"
                  isLoading={isLoading}
                  onPress={() => {
                    startTransition(async () => {
                      const error = await deletePost(number);
                      if (error) {
                        toast('Error deleting post.');
                      }
                      onClose();
                    });
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
