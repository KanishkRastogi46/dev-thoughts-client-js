import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, PinInput, Button } from '@mantine/core';
import { NavLink } from 'react-router';
import { useOtpMuatation } from 'api/mutations/auth/otp.mutation';
import { notifications } from '@mantine/notifications';
import { useResendOtp } from 'api/mutations/auth/resend-otp.query';

export function Otp(): React.JSX.Element {
  const [otp, setOtp] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(120); // 2 minute;

  const { mutate: otpMutate } = useOtpMuatation();
  const { mutate: resendOtpMutate } = useResendOtp();

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

  const handleResendOtp = () => {
    resendOtpMutate(undefined, {
      onSuccess: (response) => {
        if (response.status === 200) {
          notifications.show({
            color: 'green',
            title: 'Success',
            message: 'OTP resent successfully',
          });
          setRemaining(120);
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
  };

  useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [remaining]);

  const displayTimer = React.useMemo(() => {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    const mm = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const ss = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${mm}:${ss}`;
  }, [remaining]);

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
            <Flex justify={'center'}>
              <PinInput
                length={6}
                type={/^[0-9]*$/}
                inputType="number"
                inputMode="numeric"
                size="lg"
                ta={'center'}
                onChange={(value) => setOtp(value)}
              />
            </Flex>
            <Flex justify={'flex-end'} w={{ base: '90%', xl: '50%' }}>
              <Text size="0.9rem" mb={'md'} ta={'center'} c="white">
                {remaining > 0 ? (
                  `Resend OTP in ${displayTimer}`
                ) : (
                  <Button
                    variant="transparent"
                    c={'white'}
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </Button>
                )}
              </Text>
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
