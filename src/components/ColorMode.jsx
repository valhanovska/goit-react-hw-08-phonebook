import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const { useColorMode, Button } = require('@chakra-ui/react');

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
export default ColorMode;
