import React from 'react';
import { Box, Flex, Text, PinInput, Button } from '@mantine/core';
import { NavLink } from 'react-router';
import { useOtpMuatation } from 'api/mutations/auth/otp.mutation';
import { notifications } from '@mantine/notifications';

export function Otp(): React.JSX.Element {
  const [otp, setOtp] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const { mutate: otpMutate } = useOtpMuatation();

  const handleSubmit = () => {
    setLoading(true);
    otpMutate(
      { otp },
      {
        onSuccess: (response) => {
          if (response.status === 200) {
            notifications.show({
              color: 'green',
              title: 'Success',
              message: 'OTP verified successfully',
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
  };

  return (
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
            OTP
          </Text>
          <Flex
            direction={'column'}
            gap={'md'}
            justify={'center'}
            align={'center'}
            w={{ base: '90%', xl: '50%' }}
            h={'auto'}
          >
            <Flex>
              <PinInput
                length={6}
                type={/^[0-9]*$/}
                inputType="number"
                inputMode="numeric"
                w={'100%'}
                mb={'md'}
                ta={'center'}
                onChange={(value) => setOtp(value)}
              />
            </Flex>
            <Button
              ta={'center'}
              color="orange.5"
              w={{ base: '50%', xl: '25%' }}
              radius={'lg'}
              mb={'md'}
              loading={loading}
              disabled={otp.length !== 6}
              onClick={handleSubmit}
            >
              Verify
            </Button>
            <NavLink to="/auth/login">
              <Text
                size="0.9rem"
                mb={'md'}
                ta={'center'}
                style={{ textDecoration: 'underline', color: 'white' }}
              >
                Back to Login
              </Text>
            </NavLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
