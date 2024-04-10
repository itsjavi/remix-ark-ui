import { Button, type ButtonProps } from '@/components/ui/Button'
// import { useFormStatus } from 'react-dom' 'next/specific'

type SubmitButtonProps = ButtonProps & {
  children?: React.ReactNode
  pendingChildren?: React.ReactNode
}
export default function SubmitButton({
  children = 'Save',
  pendingChildren = 'Saving...',
  ...props
}: SubmitButtonProps) {
  // const formStatus = useFormStatus()
  const formStatus = { pending: false }

  return (
    <Button {...props} type="submit" disabled={formStatus.pending}>
      {formStatus.pending ? pendingChildren : children}
    </Button>
  )
}
