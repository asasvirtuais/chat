import React from 'react'
import { Editable, HStack } from '@chakra-ui/react'

export function HeaderTitle({
  defaultValue,
  onChange,
}: {
  defaultValue: string,
  onChange?: (value: string) => void
}) {
  return (
    <Editable.Root
      justifyContent='flex-start'
      size='lg'
      fontSize='xl'
      my={2}
      placeholder='Untitled'
      defaultValue={defaultValue}
      // @ts-expect-error weird...
      onValueCommit={({value}) => onChange?.(value)}
    >
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

export default HeaderTitle