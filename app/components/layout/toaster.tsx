import * as Toast from '@/components/ui/Toast'
import { createToaster } from '@ark-ui/react/toast'
import { XIcon } from 'lucide-react'
import { IconButton } from '../ui/IconButton'

const [Toaster, toastApi] = createToaster({
  placement: 'bottom-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
        <Toast.CloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <XIcon />
          </IconButton>
        </Toast.CloseTrigger>
      </Toast.Root>
    )
  },
})

export { Toaster, toastApi }
