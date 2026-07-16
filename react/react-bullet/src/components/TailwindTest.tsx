import { Button, HStack } from "@chakra-ui/react"
export default function TailwindTest() {
  return (
    <HStack wrap="wrap" gap="6">
      <Button variant="solid" rounded="full"colorPalette="blue">Solid</Button>
      <Button variant="subtle"colorPalette="blue">Subtle</Button>
      <Button variant="surface"colorPalette="blue">Surface</Button>
      <Button variant="outline" colorPalette="blue">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain" >Plain</Button>
    </HStack>
  )
}
