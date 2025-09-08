import { Box, Flex, Text, Button, PasswordInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useResetPasswordMuatation } from 'api/mutations/auth/reset-password.mutation';
import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import type { IResetPassword } from 'utils/types/auth.type';

export function ResetPassword(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParamas] = useSearchParams();

  const [payload, setPayload] = React.useState<IResetPassword>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const { mutate: resetPasswordMutate } = useResetPasswordMuatation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getEmailFromUrlToken = useCallback(() => {
    if (window !== undefined) {
      const token = searchParams.get('token') as string;
      setPayload({
        ...payload,
        email: JSON.parse(window.atob(token?.split('.')[1]))?.email,
      });
    }
    return '';
  }, [searchParams]);

  const checkFieldNotEmpty = (data: IResetPassword) => {
    return Object.values(data).every((value) => value !== '');
  };

  const handleSubmit = () => {
    if (checkFieldNotEmpty(payload)) {
      setLoading(true);
      resetPasswordMutate(
        {
          ...payload,
        },
        {
          onSuccess: (response) => {
            if (response.status === 200) {
              notifications.show({
                color: 'green',
                title: 'Success',
                message: 'Password reset successfully',
              });
            }
          },
          onError: (error) => {
            notifications.show({
              color: 'red',
              title: 'Error',
              message: error?.message || 'Something went wrong',
            });
          },
        }
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Box mih={'auto'} h="100vh" w="100vw" bg={'blue.9'}>
        <Flex h="100%" w="100%" justify={'center'} align={'center'}>
          <Box
            w="100%"
            h="100%"
            display={'flex'}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text size="1.5rem" fw={'bold'} mb={'xl'} ta={'center'}>
              Reset Password
            </Text>
            <Flex
              direction={'column'}
              gap={'md'}
              justify={'center'}
              align={'center'}
              w={{ base: '90%', xl: '50%' }}
              h={'auto'}
            >
              <PasswordInput
                required
                placeholder="Enter new password"
                label="New Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.password}
                minLength={6}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <PasswordInput
                required
                placeholder="Confirm new password"
                label="Confirm Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.confirmPassword}
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                mb={'md'}
              />
              <Button
                ta={'center'}
                color="orange.5"
                w={{ base: '50%', xl: '25%' }}
                radius={'lg'}
                mb={'md'}
                loading={loading}
                disabled={!checkFieldNotEmpty(payload)}
                onClick={handleSubmit}
              >
                Reset
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
