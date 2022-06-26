import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Container, Flex, Image, Input, List, ListItem, Stack, Text, UnorderedList, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import bg1 from '../img/bg_1.png'
import bg2 from '../img/bg_2.png'
import logo from '../img/logo.svg'
import logo1 from '../img/icon-access-anywhere.svg'
import logo2 from '../img/icon-security.svg'
import logo3 from '../img/icon-collaboration.svg'
import logo4 from '../img/icon-any-file.svg'
import avatar1 from '../img/profile-1.jpg'
import avatar2 from '../img/profile-2.jpg'
import avatar3 from '../img/profile-3.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Home = () => {



  return (
    <div>
      <Flex w="100%" px={5} py={4} justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" w='20%' alignItems="center">
          <Image maxWidth="100%" src={logo} size={50} />
        </Flex>
        <Breadcrumb display='flex' w='100%' flexDirection="row" justifyContent="right">
          <BreadcrumbItem>
            <BreadcrumbLink fontSize='xl' href='#'>Features</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink fontSize='xl' href='#'>Team</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize='xl' href='#'>Sign in</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex >


      {/* background 1 */}
      <Container className='' maxW='container.sm'>
        <Box boxSize='md' w='100%'>
          <Image src={bg1} margin='auto' boxSize='100%' objectFit='cover' w='100%' alt='Dan Abramov' />
        </Box>
      </Container>

      <Container className='' maxW='container.lg'>
        <Stack spacing={3}>
          <Text fontWeight='bold' textAlign='center' fontSize='3xl'>All your files in one secure location, accessible anywhere.</Text>
          <Text fontSize='xl' textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos! Sequi consectetur odio hic quidem quod, perspiciatis non praesentium tenetur nostrum. Exercitationem, explicabo.</Text>
        </Stack>
        <Stack spacing={4} direction='row' display="flex" justifyContent="space-around" align='center'>
          <Button borderRadius='50px' mt='20px' mb='200px' w='30%' bg='#42b2cf'>
            Get Started
          </Button>
        </Stack>
      </Container>


      {/* cards 1 */}
      <Wrap margin='auto' spacing='30px' display='flex' justifyContent="space-around" align='center' justify='center'>
        <WrapItem minW='48%' display='flex' m='auto' align='center'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Box boxSize='md' w='25%' h='50%' m='auto'>
                <Image src={logo1} margin='auto' boxSize='100%' objectFit='cover' w='100%' alt='Dan Abramov' />
              </Box>
              <Stack spacing={3}>
                <Text fontWeight='bold' textAlign='center' fontSize='2xl'>All your files, anywhere</Text>
                <Text fontSize='xl' textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
              </Stack>
            </Container>
          </Center>
        </WrapItem>

        <WrapItem minW='48%' my='20px'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Box boxSize='md' w='25%' h='50%' m='auto'>
                <Image src={logo2} margin='auto' boxSize='100%' objectFit='cover' w='100%' alt='Dan Abramov' />
              </Box>
              <Stack spacing={3}>
                <Text fontWeight='bold' textAlign='center' fontSize='2xl'>Security you can trust</Text>
                <Text fontSize='xl' textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
              </Stack>
            </Container>
          </Center>
        </WrapItem>

        <WrapItem minW='48%' my='20px'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Box boxSize='md' w='25%' h='50%' m='auto'>
                <Image src={logo3} margin='auto' boxSize='100%' objectFit='cover' w='100%' alt='Dan Abramov' />
              </Box>
              <Stack spacing={3}>
                <Text fontWeight='bold' textAlign='center' fontSize='2xl'>Real-time collaboration</Text>
                <Text fontSize='xl' textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
              </Stack>
            </Container>
          </Center>
        </WrapItem>

        <WrapItem minW='48%' my='20px'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Box boxSize='md' w='25%' h='50%' m='auto'>
                <Image src={logo4} margin='auto' boxSize='100%' objectFit='cover' w='100%' alt='Dan Abramov' />
              </Box>
              <Stack spacing={3}>
                <Text fontWeight='bold' textAlign='center' fontSize='2xl'>Store any type of file</Text>
                <Text fontSize='xl' textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
              </Stack>
            </Container>
          </Center>
        </WrapItem>
      </Wrap>


      {/* Baackgroun 2 */}
      <Wrap margin='200px auto' spacing='30px' display='flex' justifyContent="space-around" align='center' justify='center'>

        <WrapItem W='48%' my='20px'>
          <Center w='100%' h='100%'>
            <Container className='' maxW='container.sm'>
              <Box boxSize='md' w='100%'>
                <Image src={bg2} margin='auto' boxSize='100%' objectFit='cover' w='100%' alt='Dan Abramov' />
              </Box>
            </Container>
          </Center>
        </WrapItem>
        <WrapItem W='48%' my='20px'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Stack spacing={3}>
                <Text fontWeight='bold' fontSize='4xl'>Store any type of file</Text>
                <Text fontSize='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
                <Stack w='50%' >
                  <Text w='100%' fontSize='2xl' borderBottom='2px' borderColor='#42b2cf' color='#42b2cf' _hover={{
                    color: "gray",
                  }}>See how Fylo works <i class="bi bi-arrow-right-circle"></i></Text>
                </Stack>
              </Stack>
            </Container>
          </Center>
        </WrapItem>
      </Wrap>


      {/* cards 2 */}
      <Wrap margin='100px auto' spacing='30px' display='flex' justifyContent="space-around" align='center' justify='center'>

        <WrapItem p='30px 10px' minW='30%' display='flex' m='auto' bg='#21293c'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Stack spacing={3}>
                <Text fontSize='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
                <Wrap>
                  <WrapItem>
                    <Avatar name='Dan Abrahmov' src={avatar1} />
                  </WrapItem>
                  <WrapItem>
                    <Container>
                      <Text fontWeight='bold' fontSize='lg'>Satish Patel</Text>
                      <Text fontSize='sm'>Fouder & CEO, Muddle</Text>
                    </Container>
                  </WrapItem>
                </Wrap>
              </Stack>
            </Container>
          </Center>
        </WrapItem>
        <WrapItem p='30px 10px' minW='30%' display='flex' m='auto' bg='#21293c'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Stack spacing={3}>
                <Text fontSize='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
                <Wrap>
                  <WrapItem>
                    <Avatar name='Dan Abrahmov' src={avatar2} />
                  </WrapItem>
                  <WrapItem>
                    <Container>
                      <Text fontWeight='bold' fontSize='lg'>Bruce McKenzie</Text>
                      <Text fontSize='sm'>Fouder & CEO, Muddle</Text>
                    </Container>
                  </WrapItem>
                </Wrap>
              </Stack>
            </Container>
          </Center>
        </WrapItem>
        <WrapItem p='30px 10px' minW='30%' display='flex' m='auto' bg='#21293c'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Stack spacing={3}>
                <Text fontSize='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
                <Wrap>
                  <WrapItem>
                    <Avatar name='Dan Abrahmov' src={avatar3} />
                  </WrapItem>
                  <WrapItem>
                    <Container>
                      <Text fontWeight='bold' fontSize='lg'>Iva Boyd</Text>
                      <Text fontSize='sm'>Fouder & CEO, Muddle</Text>
                    </Container>
                  </WrapItem>
                </Wrap>
              </Stack>
            </Container>
          </Center>
        </WrapItem>
      </Wrap>


      <Wrap position= 'relative' top='100px'w='100%' margin='auto' spacing='30px' display='flex' justifyContent="space-around" align='center' justify='center'>

        <WrapItem p='30px 10px' minW='100%' display='flex' m='auto' bg='#21293c'>
          <Center w='100%' h='100%'>
            <Container className='' w=' 100%'>
              <Stack spacing={3}>
                <Text fontWeight='bold' textAlign='center' fontSize='3xl'>Get early access today</Text>
                <Text fontSize='xl' textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>
                <Container display='flex' justifyContent="space-between">
                  <Input htmlSize={4} borderRadius='50px' width='50%' bg='balck' color='black' placeholder='email@example.com'
                    _placeholder={{ opacity: 1, color: 'black.500' }} />

                  <Button borderRadius='50px' w='45%' bg='#42b2cf' right="0">
                    Get Started For Fee
                  </Button>
                </Container>

              </Stack>
            </Container>
          </Center>
        </WrapItem>
      </Wrap>


      <Center bg='#0c1524' h='100%' color='white'>

        <Wrap margin='150px auto' spacing='30px' display='flex' justifyContent="space-around" align='center' justify='center'>
          <Image src={logo} margin='20px auto' w='20%' alt='Dan Abramov' />

          <WrapItem p='30px 10px' minW='30%' display='flex' m='auto'>
            <Center w='100%' h='100%'>
              <Container className='' w=' 100%'>

                <Container display='flex' justifyContent="space-between">
                  
                <i class="bi bi-geo-alt"></i>                  <Text mx='20px' fontSize='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, porro facilis ipsum voluptatem numquam et alias eos!</Text>

                </Container>
              </Container>
            </Center>
          </WrapItem>
          <WrapItem p='30px 10px' minW='20%' display='flex' m='auto'>
            <Center w='100%' h='100%'>
              <Container className='' w=' 100%'>
                <List spacing={3}>
                  <ListItem>
                  <i class="bi bi-telephone" > +1-543-123-4567</i>  
                  </ListItem>
                  <ListItem>
                  <i class="bi bi-envelope"> example@fylo.com</i>  
                    
                  </ListItem>
                </List>
              </Container>
            </Center>
          </WrapItem>
          <WrapItem p='30px 10px' minW='20%' display='flex' m='auto'>
            <Center w='100%' h='100%'>
              <Container className='' w=' 100%'>
                <UnorderedList>
                  <ListItem>About Us</ListItem>
                  <ListItem>Jobs</ListItem>
                  <ListItem>Press</ListItem>
                  <ListItem>Blog</ListItem>
                </UnorderedList>
              </Container>
            </Center>
          </WrapItem>
          <WrapItem p='30px 10px' minW='20%' display='flex' m='auto'>
            <Center w='100%' h='100%'>
              <Container className='' w=' 100%'>
                <UnorderedList>
                  <ListItem>Contact Us</ListItem>
                  <ListItem>Terms</ListItem>
                  <ListItem>Privacity</ListItem>
                </UnorderedList>
              </Container>
            </Center>
          </WrapItem>
          <WrapItem p='30px 10px' minW='20%' display='flex' m='auto'>
            <Center w='100%' h='100%'>
              <Container className='' w=' 100%'>
                <Container display='flex' w='100%' justifyContent="space-between">
                  <Button py='25px' m='10px' variant='outline' borderRadius='100px' >
                    <i class="bi bi-facebook"></i>
                  </Button>
                  <Button py='25px' m='10px' variant='outline' borderRadius='100px' >
                    <i class="bi bi-twitter "></i>
                  </Button>
                  <Button py='25px' m='10px' variant='outline' borderRadius='100px' >
                    <i class="bi bi-instagram"></i>
                  </Button>
                </Container>
              </Container>
            </Center>
          </WrapItem>
        </Wrap>
      </Center>


    </div>
  )
}
