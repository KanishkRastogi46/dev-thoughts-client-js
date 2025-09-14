import {
  Box,
  Flex,
  Text,
  Button,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useLoginMuatation } from 'api/mutations/auth/login.mutation';
import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import type { ILogin } from 'utils/types/auth.type';
import { otp } from 'common/constants/routes-def';

export function Login(): React.JSX.Element {
  const navigate = useNavigate();

  const [payload, setPayload] = React.useState<ILogin>({
    identifier: '',
    password: '',
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const { mutate: loginMutate } = useLoginMuatation();

  const checkFieldNotEmpty = (data: ILogin) => {
    return Object.values(data).every((value) => value !== '');
  };

  const handleSubmit = () => {
    if (checkFieldNotEmpty(payload)) {
      setLoading(true);
      loginMutate(payload, {
        onSuccess: (response) => {
          if (response.status === 200) {
            notifications.show({
              color: 'green',
              title: 'Success',
              message: 'User logged in successfully',
            });
            navigate(otp, { replace: true });
          }
        },
        onError: (error) => {
          notifications.show({
            color: 'red',
            title: 'Error',
            message: error?.message || 'Something went wrong',
          });
        },
      });
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
              Signin
            </Text>
            <Flex
              direction={'column'}
              gap={'md'}
              justify={'center'}
              align={'center'}
              w={{ base: '90%', xl: '50%' }}
              h={'auto'}
            >
              <TextInput
                required
                placeholder="Enter your email/username"
                label="Email/username"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.identifier}
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    identifier: e.target.value,
                  }))
                }
              />
              <PasswordInput
                required
                placeholder="Enter your password"
                label="Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.password}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <Flex justify={'flex-end'} w={{ base: '90%', xl: '50%' }}>
                <NavLink to="/auth/forgot-password" className={'text-right'}>
                  <Text
                    size="0.9rem"
                    mb={'md'}
                    ta={'right'}
                    style={{ textDecoration: 'underline', color: 'white' }}
                  >
                    Forget Password?
                  </Text>
                </NavLink>
              </Flex>
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
                Signin
              </Button>
              <NavLink to="/auth/register">
                <Text
                  size="0.9rem"
                  mb={'md'}
                  ta={'center'}
                  style={{ textDecoration: 'underline', color: 'white' }}
                >
                  Signup
                </Text>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
