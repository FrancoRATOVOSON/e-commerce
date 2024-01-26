import { useRef } from 'react'

import { Button, Modal } from '../components'

interface ModalFixtureProps {
  closeOnClickOutside: boolean
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const ModalFixture = ({ closeOnClickOutside }: ModalFixtureProps) => {
  const modal = useRef<HTMLDialogElement>(null)

  return (
    <div>
      <Button onClick={() => modal.current?.showModal()} variant="primary">
        Open Modal
      </Button>
      <Modal ref={modal}>
        <div className="flex flex-col gap-6">
          <p>This is the dialog</p>
          <Button onClick={() => modal.current?.close()} variant="secondary">
            Close Modal
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default <ModalFixture closeOnClickOutside={true} />
