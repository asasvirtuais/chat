import React, { useEffect } from 'react'
import { Editable, HStack } from '@chakra-ui/react'

export function HeaderTitle({
  onChange,
  value,
  defaultValue,
}: {
  onChange?: (value: string) => void,
  value?: string
  defaultValue?: string
}) {
  const [title, setTitle] = React.useState(value)
  useEffect(() => setTitle(value), [value])
  useEffect(() => setTitle(defaultValue), [defaultValue])
  return (
    <Editable.Root
      justifyContent='flex-start'
      size='lg'
      fontSize='xl'
      my={2}
      placeholder='Untitled'
      value={title}
      defaultValue={defaultValue}
      // @ts-expect-error weird...
      onValueChange={({value}) => setTitle(value)}
      // @ts-expect-error weird...
      onValueCommit={({value}) => onChange?.(value)}
    >
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

export default HeaderTitle