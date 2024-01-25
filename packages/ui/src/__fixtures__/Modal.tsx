import { useRef } from 'react'
import { Button, Modal } from '@/components'

interface ModalFixtureProps {
  closeOnClickOutside: boolean
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const ModalFixture = ({ closeOnClickOutside }: ModalFixtureProps) => {
  const modal = useRef<HTMLDialogElement>(null)

  return (
    <div>
      <Button variant="Primary" onClick={() => modal.current?.showModal()}>
        Open Modal
      </Button>
      <Modal ref={modal}>
        <div className="flex flex-col gap-6">
          <p>This is the dialog</p>
          <Button variant="Secondary" onClick={() => modal.current?.close()}>
            Close Modal
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default <ModalFixture closeOnClickOutside={true} />
