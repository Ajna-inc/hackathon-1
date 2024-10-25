import { HStack, Text } from "@chakra-ui/react";

interface NavbarProps {

}

export default function Navbar({ }: NavbarProps) {
    return (
        <HStack position={'fixed'} top={0} left={0} w={'full'} px={{ 'base': '2rem', 'mdTo2xl': '3.5rem', "2xl": '5rem' }} py={'1.5rem'} bg={'#CAF1DE'}>
            {/* <CurrentRoute heading={'Verifier'}/> */}
            <Text fontWeight={'bold'} fontSize={'18px'} color={'#FCFCFC'} textTransform={'capitalize'}>
                {/* {heading.replace('/','')} */}
                Verifier
            </Text>
        </HStack>
    )
}