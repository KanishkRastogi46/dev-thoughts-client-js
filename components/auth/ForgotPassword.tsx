import { Box, Flex, Text, Button, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useForgetPasswordMuatation } from 'api/mutations/auth/forget-password.mutation';
import React from 'react';
import { NavLink } from 'react-router';

export function ForgetPassword(): React.JSX.Element {
  const [email, setEmail] = React.useState('');

  const [loading, setLoading] = React.useState<boolean>(false);

  const { mutate: forgetPasswordMutate } = useForgetPasswordMuatation();

  const handleSubmit = () => {
    if (email.trim() !== '') {
      setLoading(true);
      forgetPasswordMutate(
        { email },
        {
          onSuccess: (response) => {
            if (response.status === 200) {
              notifications.show({
                color: 'green',
                title: 'Success',
                message: 'Password Reaset link sent to your email',
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
              Forgot Password
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
                placeholder="Enter your email"
                label="Email"
                type="email"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb={'md'}
              />
              <Button
                ta={'center'}
                color="orange.5"
                w={{ base: '50%', xl: '25%' }}
                radius={'lg'}
                mb={'md'}
                loading={loading}
                disabled={email.trim() === '' || !email.includes('@')}
                onClick={handleSubmit}
              >
                Send
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
