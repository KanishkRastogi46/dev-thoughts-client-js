import {
  Box,
  Flex,
  Text,
  Select,
  Button,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useRegisterMuatation } from 'api/mutations/auth/register.mutation';
import React from 'react';
import { NavLink } from 'react-router';
import type { IRegister } from 'utils/types/auth.type';

export function Register(): React.JSX.Element {
  const [payload, setPayload] = React.useState<IRegister>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    country: 0,
    countryCode: 0,
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const { mutate: registerMutate } = useRegisterMuatation();

  const checkFieldNotEmpty = (data: IRegister) => {
    return Object.values(data).every((value) => value !== '');
  };

  const handleSubmit = () => {
    if (checkFieldNotEmpty(payload)) {
      setLoading(true);
      registerMutate(payload, {
        onSuccess: (response) => {
          if (response.status === 201) {
            notifications.show({
              color: 'green',
              title: 'Success',
              message: 'User registered successfully',
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
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Box mih={'100vh'} h="auto" w="100vw" bg={'blue.9'}>
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
              Signup
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
                placeholder="Enter your first name"
                label="First Name"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.firstName}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, firstName: e.target.value }))
                }
              />
              <TextInput
                placeholder="Enter your last name"
                label="Last Name"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.lastName}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, lastName: e.target.value }))
                }
              />
              <TextInput
                required
                placeholder="Enter your email"
                label="Email"
                type="email"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.email}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <TextInput
                required
                placeholder="Enter your username"
                label="username"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={payload.username}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, username: e.target.value }))
                }
              />
              <Select
                required
                label="Country"
                placeholder="Select your country"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
              />
              <TextInput
                required
                label="Phone Number"
                variant="filled"
                leftSection={<Text>+91</Text>}
                w={{ base: '90%', xl: '50%' }}
                value={payload.phoneNumber}
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
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
              <PasswordInput
                required
                placeholder="Confirm your password"
                label="Confirm Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                mb={'md'}
                value={payload.confirmPassword}
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
              />
              <Button
                ta={'center'}
                color="orange.5"
                w={{ base: '50%', xl: '25%' }}
                radius={'lg'}
                mb={'md'}
                disabled={!checkFieldNotEmpty(payload)}
                loading={loading}
                onClick={handleSubmit}
              >
                Signup
              </Button>
              <NavLink to="/auth/login">
                <Text
                  size="0.9rem"
                  mb={'md'}
                  ta={'center'}
                  style={{ textDecoration: 'underline', color: 'white' }}
                >
                  Signin
                </Text>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
