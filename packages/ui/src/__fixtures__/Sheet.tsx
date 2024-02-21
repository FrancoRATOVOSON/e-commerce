import * as React from 'react'

import {
  Button,
  Container,
  ControlledSheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  openSheet
} from '../components'

function SheetDemo() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">Sheet header</div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  )
}

function SheetFixture() {
  return (
    <Container className="flex justify-center items-center">
      <Button onClick={() => openSheet({ content: <SheetDemo /> })}>
        Cliquer
      </Button>
      <ControlledSheet />
    </Container>
  )
}

export default <SheetFixture />
