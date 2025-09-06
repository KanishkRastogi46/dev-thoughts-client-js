import {
  Box,
  Flex,
  Text,
  Button,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router';

export function Login(): React.JSX.Element {
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
              />
              <PasswordInput
                required
                placeholder="Enter your password"
                label="Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
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
