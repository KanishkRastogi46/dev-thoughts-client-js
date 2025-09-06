import {
  Box,
  Flex,
  Text,
  Select,
  Button,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router';

export function Register(): React.JSX.Element {
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
              />
              <TextInput
                placeholder="Enter your last name"
                label="Last Name"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
              />
              <TextInput
                required
                placeholder="Enter your email"
                label="Email"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
              />
              <TextInput
                required
                placeholder="Enter your username"
                label="username"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
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
              />
              <PasswordInput
                required
                placeholder="Enter your password"
                label="Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
              />
              <PasswordInput
                required
                placeholder="Confirm your password"
                label="Confirm Password"
                variant="filled"
                w={{ base: '90%', xl: '50%' }}
                mb={'md'}
              />
              <Button
                ta={'center'}
                color="orange.5"
                w={{ base: '50%', xl: '25%' }}
                radius={'lg'}
                mb={'md'}
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
